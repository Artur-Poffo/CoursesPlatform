import { Schema, model } from "mongoose"
import { Class } from "../interfaces/Class"

export interface ICourse {
  name: string
  desc: string
  techs?: Array<string>
  classes?: Array<Class>
}

const CourseSchema = new Schema<ICourse>({
  name: { type: String, required: true },
  desc: { type: String, required: true },
  techs: { type: Array, required: false },
  classes: { type: Array, required: true }
})

const Course = model<ICourse>("courses", CourseSchema)

export default Course