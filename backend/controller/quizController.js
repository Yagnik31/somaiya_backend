import path from "path"; // Import the 'path' module
import fs from "fs"; // Import the 'fs' module (file system)
import pdfParse from "pdf-parse"; // Import the 'pdf-parse' library for handling PDFs
import natural from "natural"; // Import the 'natural' NLP library
import { GoogleGenerativeAI } from '@google/generative-ai'; // Import Google Generative AI SDK

const genAI = new GoogleGenerativeAI("AIzaSyAmbVh19xBPdUqilHhAfLyrvZXhftVhrws"); // Initialize with your API key

// Analyze PDF Text (Stopwords Removal, Tokenization)
function analyzeContent(text) {
  const tokenizer = new natural.WordTokenizer();
  let words = tokenizer.tokenize(text.toLowerCase());

  // Remove stopwords
  const stopWords = new Set(natural.stopwords);
  words = words.filter((word) => word && word.length > 1 && !stopWords.has(word));

  // Frequency of words
  const wordFreq = words.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {});

  // Extract the top 10 most frequent words as key topics
  const keyTopics = Object.entries(wordFreq)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  // Identify potential question types based on word occurrence
  const questionTypes = [];
  if (words.includes("define")) questionTypes.push("definition");
  if (words.includes("example")) questionTypes.push("example");
  if (words.includes("compare")) questionTypes.push("comparison");
  if (words.includes("cause")) questionTypes.push("cause_and_effect");

  return {
    key_topics: keyTopics,
    question_types: questionTypes,
  };
}

// Generate MCQs using Google Generative AI
async function generateMCQsUsingAPI(text, numQuestions = 10) {
  const contentAnalysis = analyzeContent(text);
  const prompt = `
      Generate ${10} multiple-choice questions based on the following text.
      Key topics: ${contentAnalysis.key_topics.map((item) => item[0]).join(", ")}.
      Include question types: ${contentAnalysis.question_types.join(", ")}.
      
      For each question, provide 4 options and indicate the correct answer.
      Format:
      1. [Question text]
      A. [Option A]
      B. [Option B] 
      C. [Option C]
      D. [Option D]
      Correct Answer: [A/B/C/D]
      
      Here's the text: ${text}
    `;

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); // Initialize the model

  try {
    const result = await model.generateContent([prompt]);
    const questionsText = result.response.text();

    // Process the API response to extract questions and options
    const questions = questionsText.split("\n\n").map((q) => {
      const lines = q.split("\n");
      const question = lines[0];
      const options = lines.slice(1, 5);
      const correctAnswer = lines[5]?.split(": ")[1] || '';
      return {
        question,
        options,
        correctAnswer,
      };
    });

    return questions;
  } catch (error) {
    console.error("Error generating questions:", error);
    throw new Error("Failed to generate questions");
  }
}

// PDF Upload and MCQ Generation Route
export const attempQuiz = async (req, res) => {
  const file = req.file;

  // Check if file is provided and is a PDF
  if (!file || path.extname(file.originalname).toLowerCase() !== ".pdf") {
    return res
      .status(400)
      .json({ error: "Invalid file type, only PDFs are allowed" });
  }

  try {
    // Read the PDF file
    const dataBuffer = fs.readFileSync(file.path);
    const pdfData = await pdfParse(dataBuffer);
    const pdfText = pdfData.text;

    // Generate MCQs based on the extracted text
    const mcqs = await generateMCQsUsingAPI(pdfText, 10);

    res.json({
      questions: mcqs,
      content_analysis: analyzeContent(pdfText),
    });
  } catch (error) {
    console.error("Error processing PDF:", error);
    res.status(500).json({ error: "Error processing PDF" });
  } finally {
    fs.unlinkSync(file.path); // Delete the file after processing
  }
};
