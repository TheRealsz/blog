import mongoose, { Schema } from "mongoose";
import { postsSchema, IPost } from "./posts";

interface IUser {
    fullname: string,
    email: string,
    password: string,
    profileImg: string,
    posts: IPost[],
    timeStamp: boolean
}


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
        profileImg: {
            type: String
        },
        posts: {
            type: [postsSchema]
        }
    }, // Registro da data da data
        {timestamps: true}
)

const Users = mongoose.model<IUser>('Users', userSchema)


export { Users, userSchema, IUser }

// Metodos para manipular os dados