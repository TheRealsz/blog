import mongoose from "mongoose";
import { postsSchema } from "./posts";


// Esqueleto do model
const { Schema } = mongoose

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
            type: ImageData
        },
        posts: {
            type: [postsSchema]
        }
    }, // Registro da data da data
        {timestamps: true}
)

const Users = mongoose.model('Users', userSchema)


export { Users, userSchema }

// Metodos para manipular os dados