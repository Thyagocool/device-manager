import { Category } from 'src/app/interfaces/category';
export interface Device {
  id?:string;
  description?: String;
  serialNumber?: Number;
  color?: String
  category?: BigInt;
}
