import mongoose from 'mongoose'
const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['student', 'teacher'],
    required: true,
  },
  joinedClassrooms: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Classroom',
    },
  ],
});

const userModel = mongoose.model('User', userSchema);
export default userModel;