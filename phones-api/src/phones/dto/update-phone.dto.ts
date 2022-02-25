import { PartialType } from '@nestjs/mapped-types';
import { CreatePhoneDto } from './create-phone.dto';

export class UpdatePhoneDto extends PartialType(CreatePhoneDto) {
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
