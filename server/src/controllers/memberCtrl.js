"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Member_model_1 = require("../models/Member.model");
const memberCtrl = {
    createMember: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            console.log(req.body);
            const newUser = new Member_model_1.MemberModel(Object.assign({}, req.body));
            console.log(newUser);
            if (!newUser)
                return res.status(400).json({ msg: "Invalid data" });
            console.log(newUser);
            yield newUser.save();
            console.log(newUser);
            return res.status(200).json({ msg: "Add car success" });
        }
        catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    }),
    geaAllMember: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const users = yield Member_model_1.MemberModel.find();
            if (!users)
                return res.status(400).json({ msg: "User not found" });
            res.status(200).json(users);
        }
        catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    }),
    getMemberById: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = yield Member_model_1.MemberModel.findById(req.query.id);
            if (!user)
                return res.status(400).json({ msg: "User not found" });
            res.status(200).json(user);
        }
        catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    }),
};
exports.default = memberCtrl;
