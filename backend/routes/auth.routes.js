import express from "express";
import {
  login,
  signup,
  logout,
  getMe,
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";
const router = express.Router();
//allows us to create mountable route handlers

router.get("/me", protectRoute, getMe);
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

export default router;
//authRoutes in server.js is same as router here
// Routes define the endpoints (URL paths) that clients can request and the corresponding controller actions that handle those requests.
