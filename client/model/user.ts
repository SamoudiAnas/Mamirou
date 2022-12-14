import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        unique: false,
    },

    lastName: {
        type: String,
        required: true,
        unique: false,
    },

    address: {
        type: String,
        required: true,
        unique: false,
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    phone: {
        type: String,
        required: false,
        unique: true,
    },

    hashedPassword: {
        type: String,
        required: true,
        unique: false,
        minLength: 6,
    },
    cart: [
        {
            type: Schema.Types.Mixed,
        },
    ],
    wishlist: [
        {
            type: Schema.Types.Mixed,
        },
    ],
    orders: [
        {
            type: Schema.Types.Mixed,
        },
    ],
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
