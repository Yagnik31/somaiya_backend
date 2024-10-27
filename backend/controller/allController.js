import userModel from "../models/userModel.js";
import classroomModel from "../models/classroomModel.js";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "djahrqrul",
  api_key: "998429148154451",
  api_secret: "7s2gfZhjyHSCTc2aapanXXwa95Y",
});

// Function to post all users (teachers and studenclsts)
export const postAllUsersData = async () => {
  // Teacher credentials (email, password, and role)
  const teacherCredentials = [
    { email: "cpingle@somaiya.edu", password: "cpingle@1234", role: "teacher" },
    { email: "rnpatil@somaiya.edu", password: "rnpatil@1234", role: "teacher" },
    { email: "niti@somaiya.edu", password: "niti@1234", role: "teacher" },
    {
      email: "snehal01@somaiya.edu",
      password: "snehal01@1234",
      role: "teacher",
    },
    {
      email: "nilesh.kitke@somaiya.edu",
      password: "nilesh@1234",
      role: "teacher",
    },
    {
      email: "megha.kapse@somaiya.edu",
      password: "megha@1234",
      role: "teacher",
    },
    { email: "varsha.k@somaiya.edu", password: "varsha@1234", role: "teacher" },
  ];

  // Complete list of 60 student credentials
  const studentCredentials = [
    { email: "kvb@somaiya.edu", password: "1920220054", role: "student" },
    {
      email: "moiz.bookwala@somaiya.edu",
      password: "1920220027",
      role: "student",
    },
    { email: "prapti.c@somaiya.edu", password: "1920220178", role: "student" },
    {
      email: "bhumi.chotaliya@somaiya.edu",
      password: "1920220040",
      role: "student",
    },
    {
      email: "darshan.mc@somaiya.edu",
      password: "1920220098",
      role: "student",
    },
    { email: "mit.darji@somaiya.edu", password: "1920220032", role: "student" },
    { email: "jainam.d@somaiya.edu", password: "1920220569", role: "student" },
    {
      email: "harsh.dhurat@somaiya.edu",
      password: "1920220551",
      role: "student",
    },
    { email: "shafqat.f@somaiya.edu", password: "1920220063", role: "student" },
    {
      email: "harshal.gawade@somaiya.edu",
      password: "1920220069",
      role: "student",
    },
    {
      email: "adhyatmika.g@somaiya.edu",
      password: "1920220086",
      role: "student",
    },
    { email: "anushka.g@somaiya.edu", password: "1920220023", role: "student" },
    {
      email: "drashti.gudhka@somaiya.edu",
      password: "1920220029",
      role: "student",
    },
    {
      email: "ayush.gudka@somaiya.edu",
      password: "1920220036",
      role: "student",
    },
    { email: "Nirupam.g@somaiya.edu", password: "1920220082", role: "student" },
    { email: "archita.h@somaiya.edu", password: "1920220024", role: "student" },
    { email: "garima.j@somaiya.edu", password: "1920220122", role: "student" },
    {
      email: "riya.jethava@somaiya.edu",
      password: "1920220116",
      role: "student",
    },
    {
      email: "kinjal.joshi@somaiya.edu",
      password: "1920220095",
      role: "student",
    },
    {
      email: "paras.kanade@somaiya.edu",
      password: "1920220352",
      role: "student",
    },
    {
      email: "aryan.kanungo@somaiya.edu",
      password: "1920220048",
      role: "student",
    },
    { email: "afza.khan@somaiya.edu", password: "1920220101", role: "student" },
    { email: "khan.@somaiya.edu", password: "1920220559", role: "student" },
    {
      email: "k.khangate@somaiya.edu",
      password: "1920220124",
      role: "student",
    },
    {
      email: "ahmed.khot@somaiya.edu",
      password: "1920220015",
      role: "student",
    },
    {
      email: "dhanasharee.k@somaiya.edu",
      password: "1920220018",
      role: "student",
    },
    {
      email: "megh.mandalia@somaiya.edu",
      password: "1920220204",
      role: "student",
    },
    {
      email: "jeel.mange@somaiya.edu",
      password: "1920220399",
      role: "student",
    },
    {
      email: "krisha.mange@somaiya.edu",
      password: "1920220396",
      role: "student",
    },
    {
      email: "vedika.maru@somaiya.edu",
      password: "1920220073",
      role: "student",
    },
    { email: "yash.sm@somaiya.edu", password: "1920220050", role: "student" },
    {
      email: "tanish.momaya@somaiya.edu",
      password: "1920220016",
      role: "student",
    },
    { email: "tirath.m@somaiya.edu", password: "1920220103", role: "student" },
    {
      email: "adarsh.mule@somaiya.edu",
      password: "1920220151",
      role: "student",
    },
    {
      email: "vaibhav.naik@somaiya.edu",
      password: "1920220271",
      role: "student",
    },
    {
      email: "tanvi.nikam@somaiya.edu",
      password: "1920220394",
      role: "student",
    },
    {
      email: "mohammedumar.o@somaiya.edu",
      password: "1920220068",
      role: "student",
    },
    {
      email: "shreyas.padhi@somaiya.edu",
      password: "1920220012",
      role: "student",
    },
    {
      email: "hemal.panchal@somaiya.edu",
      password: "1920220335",
      role: "student",
    },
    {
      email: "virti.panchamia@somaiya.edu",
      password: "1920220115",
      role: "student",
    },
    {
      email: "hardik.patel@somaiya.edu",
      password: "1920220066",
      role: "student",
    },
    { email: "parin.p@somaiya.edu", password: "1920220033", role: "student" },
    {
      email: "sahil.patil4@somaiya.edu",
      password: "1920220060",
      role: "student",
    },
    {
      email: "shravan.patil@somaiya.edu",
      password: "1920220022",
      role: "student",
    },
    { email: "anuj.r@somaiya.edu", password: "1920220021", role: "student" },
    {
      email: "harshal.raichura@somaiya.edu",
      password: "1920220089",
      role: "student",
    },
    {
      email: "v.rampariya@somaiya.edu",
      password: "1920220056",
      role: "student",
    },
    {
      email: "devansh.raval@somaiya.edu",
      password: "1920220052",
      role: "student",
    },
    {
      email: "yagnik.raval@somaiya.edu",
      password: "1920220053",
      role: "student",
    },
    {
      email: "heet.sedani@somaiya.edu",
      password: "1920220434",
      role: "student",
    },
    { email: "tirth.js@somaiya.edu", password: "1920220137", role: "student" },
    {
      email: "falak.shaikh@somaiya.edu",
      password: "1920220011",
      role: "student",
    },
    { email: "arrush.s@somaiya.edu", password: "1920220017", role: "student" },
    { email: "k.shetty@somaiya.edu", password: "1920220013", role: "student" },
    {
      email: "gautamee.s@somaiya.edu",
      password: "1920220200",
      role: "student",
    },
    { email: "kritin.t@somaiya.edu", password: "1920220199", role: "student" },
    { email: "tamish.u@somaiya.edu", password: "1920220382", role: "student" },
    {
      email: "sakshi.vadhawana@somaiya.edu",
      password: "1920220276",
      role: "student",
    },
    {
      email: "priyanshi.y@somaiya.edu",
      password: "1920220324",
      role: "student",
    },
    {
      email: "manpreetsingh.d@somaiya.edu",
      password: "1920230482",
      role: "student",
    },
    {
      email: "Prashant.i@somaiya.edu",
      password: "1920230185",
      role: "student",
    },
    {
      email: "tanish.katarmal@somaiya.edu",
      password: "1920230361",
      role: "student",
    },
    {
      email: "aaradhya.more@somaiya.edu",
      password: "1920230547",
      role: "student",
    },
    {
      email: "rohit.vekhande@somaiya.edu",
      password: "1920230358",
      role: "student",
    },
    { email: "param27@somaiya.edu", password: "1920210124", role: "student" },
    {
      email: "yash.surani@somaiya.edu",
      password: "Pass@1234",
      role: "student",
    },
  ];

  // Combine both arrays
  const allUsers = [...teacherCredentials, ...studentCredentials];

  try {
    // Use insertMany to insert all users at once
    await userModel.insertMany(allUsers);
    console.log("All user data inserted successfully");
  } catch (error) {
    console.error("Error inserting user data:", error);
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // If login is successful, send user information
    return res.status(200).json({
      message: "Login successful",
      user,
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

// Function to create a classroom
export const createClassroom = async (req, res) => {
  const { name, classroomID, id, email } = req.body;

  // Check if the user is authenticated (assuming you have user data in req.user)
  if (!id) {
    return res.status(401).json({ message: "Unauthorized: No user found" });
  }

  try {
    // Check if the teacher exists
    const teacher = await userModel.findById(id);
    if (!teacher) {
      return res.status(404).json({ message: "Teacher not found" });
    }

    // Create a new classroom
    const newClassroom = new classroomModel({
      name,
      classroomID,
      teacher: id,
    });

    await newClassroom.save();

    return res.status(201).json({
      message: "Classroom created successfully",
      classroom: newClassroom,
    });
  } catch (error) {
    console.error("Error creating classroom:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

export const uploadNotes = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  try {
    // Upload the file to Cloudinary
    const result = await cloudinary.uploader
      .upload_stream(
        {
          resource_type: "auto", // Automatically determine resource type
          folder: "somaya", // Specify the folder name where the PDF will be uploaded,
          resource_type: "auto",
        }, // Automatically determine resource type
        async (error, result) => {
          if (error) {
            return res
              .status(500)
              .json({ message: "Cloudinary upload error", error });
          }

          // Save PDF data to MongoDB
          const pdfData = {
            title: req.body.title, // Assuming title is sent in the request body
            url: result.secure_url, // Get the secure URL from Cloudinary
          };

          // Update the classroom document (replace 'classroomId' with the actual ID you want to update)
          const updatedClassroom = await classroomModel.findByIdAndUpdate(
            req.body.classroomId, // Assuming classroomId is sent in the request body
            { $push: { pdfs: pdfData } }, // Push the new PDF data to the pdfs array
            { new: true } // Return the updated document
          );

          return res.status(200).json({
            message: "PDF uploaded successfully",
            classroom: updatedClassroom,
          });
        }
      )
      .end(req.file.buffer); // Send the file buffer to Cloudinary
  } catch (error) {
    console.error("Error uploading notes:", error);
    return res.status(500).json({ message: "Server error", error });
  }
};

export const getTeacherDetails = async (req, res) => {
  try {
    // Assuming you're passing the teacher's ID as a route parameter
    const teacherId = req.body.id;

    // Find the teacher by their ID
    const teacher = await userModel.findOne({
      _id: teacherId,
      role: "teacher",
    });

    // If teacher is not found, return a 404 error
    if (!teacher) {
      return res.status(404).json({
        message: "Teacher not found",
      });
    }

    // Find all classrooms where this teacher is the creator
    const classrooms = await classroomModel.find({ teacher: teacher._id });

    // Return teacher details along with their classrooms
    return res.status(200).json({
      message: "Teacher details retrieved successfully",
      teacher: {
        ...teacher.toObject(), // Convert the teacher document to a plain JS object
        classrooms, // Add the associated classrooms
      },
    });
  } catch (error) {
    // Handle any errors
    console.error("Error fetching teacher details:", error);
    return res.status(500).json({
      message: "Server error",
      error,
    });
  }
};

export const joinClass = async (req, res) => {
  console.log("hello");
  try {
    const { classroomID, studentId } = req.body; // Get the classroomID from the request body
    // Assuming the student's ID is stored in req.userId (e.g., from authentication middleware)

    // Find the classroom by classroomID
    const classroom = await classroomModel.findOne({ classroomID });
    console.log(classroomID);

    if (!classroom) {
      return res.status(404).json({ message: "Classroom not found" });
    }

    // Check if the student is already in the classroom
    const isStudentAlreadyInClass = classroom.students.includes(studentId);
    if (isStudentAlreadyInClass) {
      return res
        .status(400)
        .json({ message: "Student has already joined this classroom" });
    }

    // Find the student by their ID
    const student = await userModel.findById(studentId);
    if (!student || student.role !== "student") {
      return res.status(400).json({ message: "Invalid student" });
    }

    // Add the student to the classroom's students array
    classroom.students.push(student._id);
    await classroom.save();

    // Add the classroom to the student's joinedClassrooms array
    student.joinedClassrooms.push(classroom._id);
    await student.save();

    return res.status(200).json({
      message: "Student successfully joined the classroom",
      classroom,
    });
  } catch (error) {
    console.error("Error joining classroom:", error);
    return res.status(500).json({ message: "Server error", error });
  }
};

export const getAllStudent = async (req, res) => {
  try {
    const { classroomId } = req.params; // Classroom ID is passed as a URL parameter

    // Find the classroom by classroomID and populate the 'students' field with user details
    const classroom = await classroomModel
      .findOne({ _id: classroomId })
      .populate('students', 'email role'); // Populate with student details, fetching 'email' and 'role'

    if (!classroom) {
      return res.status(404).json({ message: "Classroom not found" });
    }

    // Return the populated classroom with student details
    return res.status(200).json({
      message: "Students in classroom fetched successfully",
      students: classroom.students
    });
  } catch (error) {
    console.error("Error fetching students for the classroom:", error);
    return res.status(500).json({ message: "Server error", error });
  }
};

export const getAllPdfData = async (req, res) => {
  const { classroomId } = req.params;

  try {
      // Find the classroom by its ID
      const classroom = await classroomModel.findById(classroomId).select('pdfs');

      // If classroom not found
      if (!classroom) {
          return res.status(404).json({ message: "Classroom not found" });
      }

      // Return the list of PDFs in the classroom
      return res.status(200).json({ pdfs: classroom.pdfs });
  } catch (error) {
      console.error("Error fetching PDFs for classroom:", error);
      return res.status(500).json({ message: "Server error", error });
  }
};

export const getJoinClassDetail = async (req,res) => {
  const { studentId } = req.params;  // Assuming studentId is passed as a URL parameter

  try {
      // Find the student by their ID and populate the joinedClassrooms field to get classroom details
      const student = await userModel.findById(studentId).populate('joinedClassrooms');

      // If student not found
      if (!student) {
          return res.status(404).json({ message: "Student not found" });
      }

      // Return the classrooms the student has joined
      return res.status(200).json({ joinedClassrooms: student.joinedClassrooms });
  } catch (error) {
      console.error("Error fetching joined class details:", error);
      return res.status(500).json({ message: "Server error", error });
  }
};


export const deleteClassroom = async (req, res) => {
  const { id } = req.params; // Get classroom ID from the route parameter

  try {
      // Find the classroom by ID
      const classroom = await classroomModel.findById(id).populate('students');

      if (!classroom) {
          return res.status(404).json({ message: 'Classroom not found' });
      }

      // Remove classroom reference from all students in this classroom
      await userModel.updateMany(
          { _id: { $in: classroom.students } },
          { $pull: { joinedClassrooms: id } } // Remove the classroom ID from joinedClassrooms
      );

      // Delete the classroom
      await classroom.deleteOne();

      res.status(200).json({ message: 'Classroom and associated students deleted successfully' });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
  }
};

export const deleteNote = async (req, res) => {
  const { classroomId, noteId } = req.params; // Get classroom ID and note ID from the route parameters

  try {
      // Find the classroom and remove the note from the pdfs array
      const classroom = await classroomModel.findById(classroomId);

      if (!classroom) {
          return res.status(404).json({ message: 'Classroom not found' });
      }

      // Find the note in the pdfs array
      const noteIndex = classroom.pdfs.findIndex(pdf => pdf._id.toString() === noteId);

      if (noteIndex === -1) {
          return res.status(404).json({ message: 'Note not found' });
      }

      // Remove the note from the pdfs array
      classroom.pdfs.splice(noteIndex, 1);
      
      // Save the updated classroom
      await classroom.save();

      res.status(200).json({ message: 'Note deleted successfully' });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
  }
};


export const unjoin = async (req, res) => {
  const { studentId, classroomId } = req.body;  // Assuming studentId and classroomId are passed in the request body

  try {
      // Step 1: Remove the classroom from the student's joinedClassrooms array
      const updatedStudent = await userModel.findByIdAndUpdate(
          studentId,
          { $pull: { joinedClassrooms: classroomId } },  // Use $pull to remove the classroom from the array
          { new: true }  // Return the updated document
      );

      // Step 2: Remove the student from the classroom's students array
      const updatedClassroom = await classroomModel.findByIdAndUpdate(
          classroomId,
          { $pull: { students: studentId } },  // Use $pull to remove the student from the array
          { new: true }  // Return the updated document
      );

      // If student or classroom is not found
      if (!updatedStudent || !updatedClassroom) {
          return res.status(404).json({ message: "Student or Classroom not found" });
      }

      // Successfully unjoined
      return res.status(200).json({
          message: "Successfully unjoined the classroom",
          updatedStudent,
          updatedClassroom
      });
  } catch (error) {
      console.error("Error unjoining classroom:", error);
      return res.status(500).json({ message: "Server error", error });
  }
};