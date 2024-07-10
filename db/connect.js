const mongoose = require("mongoose");

const db = function connectDB (uri) {
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports = db;