const User = require('../models/User');

// Controller function to create a new User document
exports.createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller function to get all User documents
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to get a User document
exports.getUser = async (req, res) => {
    try {
        const user = await User.findOne(req.body.username);
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}