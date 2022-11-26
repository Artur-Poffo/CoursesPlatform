import { Schema, model } from "mongoose"

export interface IUser {
  userName: string
  email: string
  password: string
  about: string
  perfilImage: string
  courses?: Array<string>
}

const UserSchema = new Schema<IUser>({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  about: { type: String, required: true },
  perfilImage: { type: String, required: true },
  courses: { type: Array, required: true }
})

const User = model<IUser>("users", UserSchema)

export default User