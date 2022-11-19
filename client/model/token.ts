import mongoose from "mongoose";

const Schema = mongoose.Schema;

const tokenSchema = new Schema({
    JWT: {
        type: String,
        required: true,
    },
});

const Token = mongoose.models.Token || mongoose.model("Token", tokenSchema);

export default Token;
