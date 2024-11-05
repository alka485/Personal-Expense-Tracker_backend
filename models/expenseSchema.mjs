import mongoose from 'mongoose';

const expenseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim:true,
        maxlength: 50,
    },
    amount: {
        type: Number,
        required: true,
        maxlength: 20,
        trim: true,
    },
    type: {
        type: String,
        default:"expense",
    },
    date: {
        type: Date,
        default: Date.now,
        required: true,
        trim:true,
    },
    category: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required:true,
        maxlength:100,
        trim:true
    },
});

export default mongoose.model('Expenses',expenseSchema);