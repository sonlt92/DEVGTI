import { Request, Response } from "express";
import { MemberModel } from "../models/Member.model";

const memberCtrl = {
  createMember: async (req: Request, res: Response) => {
    try {
      console.log(req.body);
      const newUser = new MemberModel({ ...req.body });
      console.log(newUser);
      if (!newUser) return res.status(400).json({ msg: "Invalid data" });
      console.log(newUser);
      await newUser.save();
      console.log(newUser);
      return res.status(200).json({ msg: "Add car success" });
    } catch (error: any) {
      return res.status(500).json({ msg: error.message });
    }
  },

  geaAllMember: async (req: Request, res: Response) => {
    try {
      const users = await MemberModel.find();

      if (!users) return res.status(400).json({ msg: "User not found" });

      res.status(200).json(users);
    } catch (error: any) {
      return res.status(500).json({ msg: error.message });
    }
  },

  getMemberById: async (req: Request, res: Response) => {
    try {
      const user = await MemberModel.findById(req.query.id);
      if (!user) return res.status(400).json({ msg: "User not found" });
      res.status(200).json(user);
    } catch (error: any) {
      return res.status(500).json({ msg: error.message });
    }
  },
};

export default memberCtrl;
