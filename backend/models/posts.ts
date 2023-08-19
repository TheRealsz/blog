import mongoose, {Schema} from "mongoose";
import { userSchema, IUser } from "./Users";

interface IPost  {
    title: string,
    descricao: string,
    author: IUser[],
    likes: number,
    timeStamp: boolean
}


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

const Posts = mongoose.model<IPost>('Posts', postsSchema)


export { Posts, postsSchema, IPost }