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
const Service_model_1 = require("../models/Service.model");
const serviceCtrl = {
    createService: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const newService = new Service_model_1.ServiceModel(Object.assign({}, req.body));
            if (!newService)
                return res.status(400).json({ msg: 'Invalid data' });
            yield newService.save();
            return res.status(200).json({ msg: 'Add service success' });
        }
        catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    }),
    getAllService: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const services = yield Service_model_1.ServiceModel.find();
            if (!services)
                return res.status(400).json({ msg: 'Service not found' });
            res.status(200).json(services);
        }
        catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    })
};
exports.default = serviceCtrl;
