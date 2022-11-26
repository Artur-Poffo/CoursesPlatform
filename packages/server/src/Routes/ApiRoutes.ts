import { Router } from "express";

const routes = Router()

routes.get("/", (req, res) => {
  res.json({ success: true })
})

export default routes