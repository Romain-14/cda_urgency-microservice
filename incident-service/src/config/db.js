import mongoose from "mongoose";

const { DB_NAME, DB_PASS, DB_PORT, DB_USER } = process.env;

const connectDB = async () => {
    try {
        const response = await mongoose.connect(
            `mongodb://${DB_USER}:${DB_PASS}@localhost:${DB_PORT}/${DB_NAME}?authSource=admin`
        );
        console.log("MongoDB connected to database:", response.connection.name);
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1);
    }
};


export { connectDB };


