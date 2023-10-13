import mongoose, { Schema, Document } from "mongoose";
import { IPostDocument } from "./posts";
export interface IUser {
    fullname: string,
    email: string,
    password: string,
    token: string,
    posts: IPostDocument["_id"][];
    createdAt: Date;
    updatedAt: Date;
}

export interface IUserDocument extends IUser, Document {}

// Esqueleto do model

const userSchema = new Schema({
        fullname: {
            type: String,   
            required: true
        },
        email: {
            type: String, 
            required: true
        },
        password: {
            type: String, 
            required: true
        },  
        token: {
            type: String,
            required: false
        },
        posts:[
            {
                type: Schema.Types.ObjectId,
                ref: "Posts"
            }
        ] 
    }, // Registro da data da data
        {timestamps: true}
)

const Users = mongoose.model('Users', userSchema)


export { Users, userSchema }

// Metodos para manipular os dados