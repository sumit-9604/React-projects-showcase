import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
    text: String,
    amount: Number,
    category: String,

    //data owner
    userid:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true },

    createdat:{
        type: Date,
        default: Date.now
    }

    
});

export default mongoose.model("expense",expenseSchema);