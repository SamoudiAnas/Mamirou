import mongoose from "mongoose";

const dbConnect = async () => {
    await mongoose
        .connect(process.env.MONGODB_URI || "")
        .then(() => {
            console.log("connected");
        })
        .catch((err) => console.log(err));
};

export default dbConnect;
