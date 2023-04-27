import express from "express";
import {
  loginEmployee,
  registerEmployee,
  logoutEmployee,
  loginEmployer,
  registerEmployer,
  logoutEmployer,
} from "../controllers/auth.js";

const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post("/loginEmployee", loginEmployee);
router.post("/registerEmployee", registerEmployee);
router.delete("/logoutEmployee", logoutEmployee);

router.post("/loginEmployer", loginEmployer);
router.post("/registerEmployer", registerEmployer);
router.post("/logoutEmployer", logoutEmployer);

export default router;
