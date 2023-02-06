import express from "express";
import memberCtrl from "../controllers/memberCtrl";

const router = express.Router();

router.post("/member/add", memberCtrl.createMember);
router.get("/member", memberCtrl.geaAllMember);
router.route("/member/:id");

export default router;
