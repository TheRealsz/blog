import mongoose, {Schema, Document} from "mongoose";
import { IUser } from "./Users";

interface IPost extends Document {
    title: string,
    description: string,
    author: IUser["_id"][],
    createdAt: Date;
    updatedAt: Date;
}


const postsSchema = new Schema<IPost>({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    author: [
        {
            type: Schema.Types.ObjectId,
            ref: "Users"
        } 
    ],

}, {timestamps: true})

const Posts = mongoose.model('Posts', postsSchema)


export { Posts, postsSchema, IPost }