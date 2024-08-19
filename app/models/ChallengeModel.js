import mongoose from 'mongoose';

const challengeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
},
{
  timestamps: true
});

export default mongoose.models.Challenge || mongoose.model('Challenge', challengeSchema);