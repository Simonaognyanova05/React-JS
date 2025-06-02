const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/User');

const dbUrl = 'mongodb+srv://hotel_db:123hotel@cluster0.xqz9vjy.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

async function register(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }

    try {
        const hashedPass = await bcrypt.hash(password, 10);
        const user = new User({ email, hashedPass });

        await user.save();
        return res.status(200).json({ message: "User registered successfully", _id: user._id, email: user.email });
    } catch (err) {
        console.error("Error registering user:", err);
        return res.status(500).json({ message: "Internal server error" });
    }
}


module.exports = { register };