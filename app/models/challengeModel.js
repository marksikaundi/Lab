
import { Schema, models, model } from "mongoose";

const challengeSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      required: true,
    },
    example_solutions: [
      {
        language: {
          type: String,
        },
        code: {
          type: String,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Challenge = models.Challenge || model("Challenge", challengeSchema);

export default Challenge;