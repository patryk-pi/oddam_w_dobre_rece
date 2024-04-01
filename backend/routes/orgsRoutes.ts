import express from "express";
import { getOrgs } from "../controllers/orgsController";
const router = express.Router();

router.route("/").get(getOrgs);

export default router;
