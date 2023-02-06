"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const memberRoute_1 = __importDefault(require("./memberRoute"));
const carRoute_1 = __importDefault(require("./carRoute"));
const serviceRoute_1 = __importDefault(require("./serviceRoute"));
const gasStationRoute_1 = __importDefault(require("./gasStationRoute"));
const routes = [memberRoute_1.default, carRoute_1.default, serviceRoute_1.default, gasStationRoute_1.default];
exports.default = routes;
