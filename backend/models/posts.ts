import mongoose from "mongoose";
import { userSchema } from "./Users";


const { Schema } = mongoose
const postsSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    descricao: {
        type: String,
        required: true,
    },
    // Type mais especifico?
    author: {
        type: [userSchema],
    }, 
    likes: {
        type: Number,
    }

}, {timestamps: true})

const Posts = mongoose.model('Posts', postsSchema)


export { Posts, postsSchema }