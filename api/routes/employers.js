import express from "express";
import { getEmployer } from "../controllers/employer.js";

const router = express.Router();
router.get("/", getEmployer);

export default router;
