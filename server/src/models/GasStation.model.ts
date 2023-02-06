import { IGasStation } from "./../config/interface";
import { Schema, model } from "mongoose";

const GasStationSchema = new Schema({
  gasStationId: {
    type: String,
  },
  gasStationName: {
    type: String,
  },
  gasStationAddress: {
    type: String,
  },
  gasStationPhone: {
    type: String,
  },
});

export const GasStationModel = model<IGasStation>(
  "GasStation",
  GasStationSchema
);
