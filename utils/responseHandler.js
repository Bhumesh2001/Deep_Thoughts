exports.sendResponse = (res, status, message, data = null) => {
    res.status(status).json({ success: true, message, data });
};

exports.sendError = (res, status, message, error = null) => {
    res.status(status).json({ success: false, message, error });
};