import { Document } from "mongoose";

export interface IMember extends Document {
  liffId: string;
  avatar: string;
  name: string;
  furigana: string;
  address: string;
  phoneNumber: string;
  _doc: Object;
}

export interface ICar extends Document {
  liffId: string;
  carManufacturer?: string;
  carName?: string;
  licensePlate: string;
  registrationDate?: string;
  _doc: Object;
}

export interface IGasStation extends Document {
  gasStationId: string;
  gasStationName: string;
  gasStationAddress: string;
  gasStationPhone: string;
  _doc: Object;
}

export interface IService extends Document {
  liffId: string;
  nameService: string;
  gasStation: string;
  bookingDate: string;
  bookingCar: string;
  _doc: Object;
}
