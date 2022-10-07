import mongoose from "mongoose";

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true,
    },

    total: {
        type: Number,
        required: true,
    },

    products: [
        {
            type: String,
            required: true,
        },
    ],

    purshaseDate: {
        type: Number,
        required: true,
    },
});

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);

export default Order;
