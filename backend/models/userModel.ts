import mongoose, { Schema, InferSchemaType } from "mongoose";

const userSchema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true, unique: true },
        isAdmin: { type: Boolean, required: true, default: false },
    },
    {
        timestamps: true,
    }
);

type User = InferSchemaType<typeof userSchema>;

const User = mongoose.model("User", userSchema);

export default User;
