import mongoose from 'mongoose';
const { Schema } = mongoose;

const studentSchema = new Schema({
  name:  String, 
  roll: Number,
  math:   String,
  english: String,
  science: String,
  socialScience: String,
  lang: String,
  date: Date.now
});
module.exports = mongoose.model("Student", studentSchema)