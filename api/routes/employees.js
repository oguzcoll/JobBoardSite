import express from "express";
import { getEmployee } from "../controllers/employee.js";

const router = express.Router();
router.get("/test", getEmployee);

export default router;
