import express from "express";
import { addJobs, getJobs, deleteJobs, putJobs } from "../controllers/job.js";

const router = express.Router();
router.post("/addJobs", addJobs);
router.get("/getJobs", getJobs);
router.delete("/deleteJobs/:jobId", deleteJobs);
router.put("/updateJobs/:jobId", putJobs);

export default router;
