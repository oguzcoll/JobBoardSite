import express from "express";
import { addJobs, getJobs } from "../controllers/job.js";

const router = express.Router();
router.post("/addJobs", addJobs);
router.get("/getJobs", getJobs);

export default router;
