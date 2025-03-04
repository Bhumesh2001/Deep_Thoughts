const User = require("../models/User");
const { sendResponse, sendError } = require("../utils/responseHandler");

exports.getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        sendResponse(res, 200, "Users retrieved successfully", users);
    } catch (error) {
        next(error);
    }
};

exports.getUserById = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return sendError(res, 404, "User not found");
        sendResponse(res, 200, "User retrieved successfully", user);
    } catch (error) {
        next(error);
    }
};

exports.createUser = async (req, res, next) => {
    try {
        const user = new User(req.body);
        await user.save();
        sendResponse(res, 201, "User created successfully", user);
    } catch (error) {
        next(error);
    }
};

exports.updateUser = async (req, res, next) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        sendResponse(res, 200, "User updated successfully", updatedUser);
    } catch (error) {
        next(error);
    }
};

exports.deleteUser = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        sendResponse(res, 200, "User deleted successfully");
    } catch (error) {
        next(error);
    }
};
