import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
        trim: true
    },
    answer: [
        {
            text: {
                type: String,
                required: true,
                trim: true
            },
            isCorrect: {
                type: Boolean,
                required: true
            }
        }
    ]
});

const triviaSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    questions: {
        type: [questionSchema],
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }

});

export default mongoose.model("Trivia", triviaSchema);