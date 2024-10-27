import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Specify the path to the `pdf-parse` main file
const filePath = path.resolve(
    __dirname,
    'node_modules/pdf-parse/index.js' // Adjust if necessary
);

// Read the file content
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        process.exit(1);
    }

    // New regular expression to match the entire block
    const modifiedData = data.replace(
        /if \(isDebugMode\) {\s*let PDF_FILE = '[^']+';\s*let dataBuffer = Fs\.readFileSync\(PDF_FILE\);\s*Pdf\(dataBuffer\)\.then\(function\(data\) {\s*Fs\.writeFileSync\(`\${PDF_FILE}\.txt`, data\.text, {\s*encoding: 'utf8',\s*flag: 'w'\s*}\);\s*debugger;\s*}\)\.catch\(function\(err\) {\s*debugger;\s*}\);\s*}/g,
        '// Debug code removed for production'
    );

    // Write the modified content back to the file
    fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
        if (err) {
            console.error('Error writing file:', err);
            process.exit(1);
        }
        console.log('Successfully modified pdf-parse debug code.');
    });
});
