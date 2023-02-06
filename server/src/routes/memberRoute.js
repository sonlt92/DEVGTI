"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const memberCtrl_1 = __importDefault(require("../controllers/memberCtrl"));
const router = express_1.default.Router();
router.post("/member/add", memberCtrl_1.default.createMember);
router.get("/member", memberCtrl_1.default.geaAllMember);
router.route("/member/:id");
exports.default = router;
