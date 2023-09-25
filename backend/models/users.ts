import mongoose, { Schema, Document } from "mongoose";
import { IPost } from "./posts";

interface IUser extends Document {
    fullname: string,
    email: string,
    password: string,
    token: string,
    posts: IPost["_id"][];
    createdAt: Date;
    updatedAt: Date;
}


// Esqueleto do model

const userSchema = new Schema<IUser>({
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


export { Users, userSchema, IUser }

// Metodos para manipular os dados