const mongoose = require('mongoose');
require('dotenv').config();

// MongoDB Connection
const connectToMongoDB = async () => {
    try {
        const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/Project';
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        // You can choose to exit the process here or handle the error as needed.
    }
};

// Add an event listener to handle disconnects
mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected');
    // Attempt to reconnect
    connectToMongoDB();
});

// Connect to MongoDB
connectToMongoDB();
