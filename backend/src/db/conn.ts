import mongoose from 'mongoose';
import { env } from '../config/env'


export async function connectDb() {
    try {
        mongoose.set("strictQuery", true)
        await mongoose.connect(env.urlConnect || "");
        console.log("Conectado")
    }
    catch(e) {
        console.log(`Error: ${e}`);
    }
}

