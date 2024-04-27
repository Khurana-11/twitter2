import express from "express";
import { signup } from "../controllers/auth.controller.js";
const router = express.Router();
//allows us to create mountable route handlers
router.get("/signup", signup);

router.get("/login", (req, res) => {
  res.json({ data: "you hit the login end point" });
});

router.get("/logout", (req, res) => {
  res.send("you hit the logout end point");
});

export default router;
//authRoutes in server.js is same as router here
// Routes define the endpoints (URL paths) that clients can request and the corresponding controller actions that handle those requests.
