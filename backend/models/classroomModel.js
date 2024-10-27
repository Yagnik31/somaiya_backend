import mongoose from "mongoose";
const { Schema } = mongoose;

const classroomSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  classroomID: {
    type: String,
    unique: true,  // Ensures that the classroom has a unique ID
    required: true,
  },
  teacher: {
    type: Schema.Types.ObjectId,
    ref: 'User',  // Refers to the teacher who created this classroom
    required: true,
  },
  students: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',  // List of students who joined the classroom
    },
  ],
  pdfs: [
    {
      title: {
        type: String,
        required: true,
      },
      url: {
        type: String,  // Cloudinary URL for the PDF
        required: true,
      },
      uploadedAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

const classroomModel = mongoose.model('Classroom', classroomSchema);

export default classroomModel;
