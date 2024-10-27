import express from 'express'
import multer from 'multer';
import { attempQuiz } from '../controller/quizController.js';



const router = express.Router();
const upload = multer({ dest: 'uploads/' });


router.post('/upload',upload.single('file'), attempQuiz)

export default router;
