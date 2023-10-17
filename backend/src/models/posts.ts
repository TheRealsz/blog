import mongoose, { Schema, Document } from "mongoose";
import { IUserDocument } from "./users";

export interface IPost {
    title: string,
    description: string,
    authorID: IUserDocument["_id"][],
    authorName: string,
    createdAt: Date;
    updatedAt: Date;
}

export interface IPostDocument extends IPost, Document { }

const postsSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    authorID: [
        {
            type: Schema.Types.ObjectId,
            ref: "Users"
        }
    ],
    authorName: {
        type: String,
        ref: "Users"
    }

}, { timestamps: true })

const Posts = mongoose.model('Posts', postsSchema)


export { Posts, postsSchema }