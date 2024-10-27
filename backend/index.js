import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import allRouter from './routes/allRoutes.js'
import quizRouter from './routes/quizRoutes.js'
import { v2 as cloudinary } from 'cloudinary';


const app = express();
 
app.use(cors());
app.use(express.json())
app.use('/', allRouter)
app.use('/', quizRouter) 


cloudinary.config({
  cloud_name: 'dqzq8r78x',
  api_key: '442736316353518',
  api_secret: 'cDfT377vEHskDPjFIrrkg-zHqQI'
}); 


app.listen(8000, () => {
    mongoose.connect('mongodb+srv://yagnikraval395:yagnikraval395@somaya.lxbd9.mongodb.net/').then(() => {
        console.log("connected")
      
    }).catch((err) => {
        console.log(err)
      
    })
})