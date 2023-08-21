import mongoose, { Schema } from "mongoose";
import { postsSchema, IPost } from "./posts";


// Arrumar tipagem do post
interface BlogPost {
    titulo: 
}

interface IUser {
    id: number,
    fullname: string,
    email: string,
    password: string,
    profileImg: string,
    // posts: IPost[],
    timeStamp: boolean
}


// Esqueleto do model

const userSchema = new Schema<IUser>({
        id: {
            type: Number,
            required: true
        },
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
        // posts: {
        //     type: [postsSchema]
        // }
    }, // Registro da data da data
        {timestamps: true}
)

const Users = mongoose.model('Users', userSchema)


export { Users, userSchema, IUser }

// Metodos para manipular os dados