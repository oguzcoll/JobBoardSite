import express from "express";
import { getEmployer } from "../controllers/employer.js";

const router = express.Router();
router.get("/test", getEmployer);

export default router;
