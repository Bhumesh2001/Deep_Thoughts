const { body, validationResult } = require("express-validator");
const { sendError } = require("../utils/responseHandler");

exports.validateUser = [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("age").isInt({ min: 1 }).withMessage("Age must be a positive integer"),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return sendError(res, 400, "Validation Error", errors.array());
        }
        next();
    }
];