import { Request, Response } from "express";
import User from "../Models/UserModel";

import bcrypt from "bcrypt"

const SignUp = async (req: Request, res: Response) => {
  let toVerifyUser = {
    email: req.body.email,
    password: req.body.password
  }

  const EmailInUse = await User.findOne({ email: toVerifyUser.email })

  if (EmailInUse === null) {
    const hash = bcrypt.hashSync(req.body.password, 10)

    let newUser = new User({
      email: req.body.email,
      password: hash,
      userName: req.body.userName,
      about: req.body.about,
      perfilImage: req.body.perfilImage,
      courses: req.body.courses
    })

    newUser.save()
      .then(() => {
        res.status(200).json({ success: true, msg: "Account Created" })
      })
      .catch((err: string) => {
        res.status(500).json({ success: false, error: err })
      })
  } else {
    res.status(500).json({ success: false, msg: "Email in Use" })
  }
}

const SignIn = async (req: Request, res: Response) => {
  let VerifyUser = {
    email: req.body.email,
    password: req.body.password
  }

  const searchEmail = await User.findOne({ email: VerifyUser.email })

  if (searchEmail !== null) {
    const Compare = bcrypt.compareSync(VerifyUser.password, searchEmail.password)

    if (Compare === true) {
      res.status(200).json({ success: true, msg: "Logged" })
    } else {
      res.status(401).json({ success: false, msg: "Error on Login" })
    }
  } else {
    res.status(401).json({ success: false, msg: "Error on Login" })
  }
}

export default { SignUp, SignIn }