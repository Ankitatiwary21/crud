const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(
            'mongodb+srv://Anku:Anku@cluster0.32nl656.mongodb.net/YTMongoTest?retryWrites=true&w=majority&appName=Cluster0'
        );

        console.log('MongoDB connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;