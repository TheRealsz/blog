import mongoose from 'mongoose';


export async function main() {
    const loginConnect = process.env.NODE_PASSWORD_MONGODB;
    

    try {
        mongoose.set("strictQuery", true)
        await mongoose.connect(`mongodb+srv://robindiegoa:${loginConnect}@cluster0.jem1hk6.mongodb.net/?retryWrites=true&w=majority`);
    }
    catch(e) {
        console.log(`Error: ${e}`);
    }

}

