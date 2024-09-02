import mongoose from "mongoose";

const listItemSchema = new mongoose.Schema({
  list_item_title: {
    type: String,
  },
  list_item_disc: {
    type: String,
  },
});

const sectionSchema = new mongoose.Schema({
  section_title: {
    type: String,
    required: true,
  },
  section_description: {
    type: String,
  },
  section_list: [listItemSchema],
});

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  chapters: {
    type: Number,
    default: 0,
  },
  courseImage: {
    type: String,
    required: true,
    default: "/profile-sample.jpeg",
  },
  technologies: [String],
  sections: [sectionSchema],
  // timestamps: true,
});

export default mongoose.models.Course || mongoose.model("Course", courseSchema);

// COURSE DOCUMENT EXAMPLE

