import express from "express";
import { registerFunction } from "../controllers/userController.js";

const router = express.Router();

router.get("/register", registerFunction);



export default router;