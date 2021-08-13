import mongoose from 'mongoose'

const connectDatabase = async () => {
    try {
        let dbConn = await mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});
        if(dbConn.connection.states.connected){
            console.log(`Database connected on ${dbConn.connection.host}`);
        };
    } catch (error) {
        console.log(`Database Connection Error ${error.message}`);
    }
}

export default connectDatabase