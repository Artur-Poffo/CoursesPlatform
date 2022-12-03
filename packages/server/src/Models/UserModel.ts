import { Schema, model } from "mongoose"

export interface IUser {
  userName: string
  email: string
  password: string
  about?: string
  perfilImage?: string
  headerImage?: string
  courses?: Array<string>
}

const UserSchema = new Schema<IUser>({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  about: { type: String, required: false },
  perfilImage: { type: String, required: false },
  headerImage: { type: String, required: false },
  courses: { type: Array, required: false }
})

const User = model<IUser>("users", UserSchema)

export default User