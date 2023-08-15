import mongoose from 'mongoose';


async function main() {
    const loginConnect = ''

    try {
        await mongoose.connect("")
    }
    catch(e) {
        console.log(`Error: ${e}`);
    }

}

export default main()