import { Schema, model } from "mongoose";
import { IService } from "../config/interface";

const ServiceSchema: Schema = new Schema({
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

export const ServiceModel = model<IService>("Service", ServiceSchema);
