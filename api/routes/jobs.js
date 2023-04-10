import express from "express";
import { addJobs, getJobs } from "../controllers/job.js";

const router = express.Router();
router.post("/", addJobs);
router.get("/", getJobs);

export default router;
