import { IMember } from "../config/interface";
import { Schema, model } from "mongoose";

const MemberSchema = new Schema({
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

export const MemberModel = model<IMember>("Member", MemberSchema);
