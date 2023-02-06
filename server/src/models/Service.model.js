"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceModel = void 0;
const mongoose_1 = require("mongoose");
const ServiceSchema = new mongoose_1.Schema({
    liffId: {
        type: String,
    },
    nameService: {
        type: String,
    },
    gasStation: {
        type: String,
    },
    bookingDate: {
        type: String,
    },
    bookingCar: {
        type: String,
    },
});
exports.ServiceModel = (0, mongoose_1.model)("Service", ServiceSchema);
