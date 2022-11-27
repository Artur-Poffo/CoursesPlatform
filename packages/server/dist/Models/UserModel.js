"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    userName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    about: { type: String, required: false },
    perfilImage: { type: String, required: false },
    courses: { type: Array, required: false }
});
const User = (0, mongoose_1.model)("users", UserSchema);
exports.default = User;
