"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarModel = void 0;
const mongoose_1 = require("mongoose");
const CarSchema = new mongoose_1.Schema({
    liffId: {
        type: String,
    },
    carManufacturer: {
        type: String,
    },
    carName: {
        type: String,
    },
    licensePlate: {
        type: String,
    },
    registrationDate: {
        type: String,
    },
});
exports.CarModel = (0, mongoose_1.model)("Car", CarSchema);
