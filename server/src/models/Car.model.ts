import { ICar } from "./../config/interface";
import { Schema, model } from "mongoose";

const CarSchema = new Schema({
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

export const CarModel = model<ICar>("Car", CarSchema);
