"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CourseSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    desc: { type: String, required: true },
    tags: { type: Array, required: true },
    techs: { type: Array, required: false }
});
const Course = (0, mongoose_1.model)("courses", CourseSchema);
exports.default = Course;
