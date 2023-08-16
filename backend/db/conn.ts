import mongoose from 'mongoose';
import { env } from '../config/env'


export async function main() {
    try {
        mongoose.set("strictQuery", true)
        await mongoose.connect(`mongodb+srv://robindiegoa:${env.loginConnect}@cluster0.jem1hk6.mongodb.net/?retryWrites=true&w=majority`);
        console.log("Conectado")
    }
    catch(e) {
        console.log(`Error: ${e}`);
    }
}

