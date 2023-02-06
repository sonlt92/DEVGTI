import express from "express";
import serviceCtrl from "../controllers/serviceCtrl";

const router = express.Router();

router.post("/service/add", serviceCtrl.createService);
router.get("/service", serviceCtrl.getAllService);

export default router;
