"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const gasStationCtr_1 = __importDefault(require("../controllers/gasStationCtr"));
const router = express_1.default.Router();
router.post("/gas/add", gasStationCtr_1.default.createGas);
router.get("/gas", gasStationCtr_1.default.getAllGas);
exports.default = router;
