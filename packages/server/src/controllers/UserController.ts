import { Request, Response, NextFunction } from "express";
import User from "../Models/UserModel";

import jwt from "jsonwebtoken"
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
      const secret = process.env.SECRET

      const token = jwt.sign({ id: searchEmail._id }, `${secret}`)

      const { email, userName, perfilImage, about, courses } = searchEmail

      res.status(200).json({ success: true, token, user: { email, userName, perfilImage, about, courses } })
    } else {
      res.status(422).json({ success: false, msg: "Error on Login" })
    }
  } else {
    res.status(422).json({ success: false, msg: "Error on Login" })
  }
}

const getUserData = async (req: Request, res: Response) => {
  const { id } = req.params
  let user;

  if (id.match(/^[0-9a-fA-F]{24}$/)) {
    user = await User.findById(id, '-password')
  }

  if (!user) {
    return res.status(404).json({ success: false, msg: "User not found" })
  }

  res.status(200).json({ success: true, user })
}

const checkToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader: any = req.header('Authorization')
  const token: string = authHeader && authHeader.split(" ")[1]

  if (!token) {
    return res.status(401).json({ success: false, msg: "Access Denied" })
  }

  try {
    const secret: any = process.env.SECRET

    jwt.verify(token as string, secret as string)

    next()
  } catch (err) {
    res.status(401).json({ success: false, msg: `Invalid Token ${err}` })
  }
}

export default { SignUp, SignIn, getUserData, checkToken }