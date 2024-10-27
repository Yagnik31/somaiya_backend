import express from 'express'
import { login, postAllUsersData,joinClass, createClassroom, uploadNotes, getTeacherDetails, getAllStudent, getAllPdfData, getJoinClassDetail, deleteClassroom, deleteNote, unjoin } from '../controller/allController.js';
import multer from 'multer'; 


const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });



// POST ALL USER DATA
router.post('/alldata', postAllUsersData)

//login Route
router.post("/login", login)

//create classroom
router.post('/createClassroom', createClassroom);

router.post('/uploadNotes',upload.single('pdf'), uploadNotes);

router.post("/getTeacherData", getTeacherDetails)


router.post("/joinClass", joinClass)

router.get('/getAllStudent/:classroomId', getAllStudent)

router.get('/getAllPdf/:classroomId', getAllPdfData);

router.get('/getStudentClass/:studentId', getJoinClassDetail);

router.delete('/classroom/:id', deleteClassroom)

router.delete('/note/:classroomId/:noteId', deleteNote);

router.post('/unjoin', unjoin);


export default router;