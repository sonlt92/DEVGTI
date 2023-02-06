"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberModel = void 0;
const mongoose_1 = require("mongoose");
const MemberSchema = new mongoose_1.Schema({
    liffId: {
        type: String,
    },
    avatar: {
        type: String,
    },
    name: {
        type: String,
    },
    furigana: {
        type: String,
    },
    address: {
        type: String,
    },
    phoneNumber: {
        type: String,
    },
});
exports.MemberModel = (0, mongoose_1.model)("Member", MemberSchema);
