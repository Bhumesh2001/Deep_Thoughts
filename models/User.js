const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        index: true, // Index for frequent name-based queries
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true, // Ensure case-insensitive uniqueness
        trim: true,
    },
    age: {
        type: Number,
        required: [true, 'Age is required'],
        min: [0, 'Age cannot be negative'],
        max: [120, 'Age cannot exceed 120'],
    },
}, {
    timestamps: true, // Adds createdAt and updatedAt fields
    writeConcern: { w: 'majority', wtimeout: 5000 }, // Ensures data durability 
});

// Compound index for queries combining email and name (if applicable)
userSchema.index({ email: 1, name: 1 });

// Export the model
module.exports = mongoose.model('User', userSchema);