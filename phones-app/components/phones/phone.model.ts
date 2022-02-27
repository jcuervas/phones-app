import {QueryOptions} from "../../models/queryOptions";

export type PhonesResponse = [Phone[], number]

export interface PhoneQueryOptions extends QueryOptions {
}

export interface UpdatePhoneResult {
  generatedMaps: any[],
  raw: any[],
  affected: number
}

export interface Phone {
  id?: number;
  name: string;
  slug: string;
  manufacturer: string;
  description: string;
  color: string;
  price: number;
  imageFileName: string[];
  screen: string;
  processor: string;
  ram: string;
}
