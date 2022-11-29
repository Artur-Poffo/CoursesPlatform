import { Request, Response } from "express";
import Course from "../Models/CourseModel";

const ListCourses = async (req: Request, res: Response) => {
  try {
    const courses = await Course.find({})

    res.status(200).json({ success: true, courses })
  } catch (err) {
    res.status(500).json({ success: false, msg: "Error in system: " + err })
  }
}

export default { ListCourses }