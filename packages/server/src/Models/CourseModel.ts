import { Schema, model } from "mongoose"

export interface ICourse {
  name: string
  desc: string
  tags?: Array<string>
  techs?: Array<string>
}

const CourseSchema = new Schema<ICourse>({
  name: { type: String, required: true },
  desc: { type: String, required: true },
  tags: { type: Array, required: true },
  techs: { type: Array, required: false }
})

const Course = model<ICourse>("courses", CourseSchema)

export default Course