import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Query,
  Delete,
  HttpStatus,
  HttpException,
  Res,
} from '@nestjs/common';
import { PhoneService } from './phone.service';
import { CreatePhoneDto } from './dto/create-phone.dto';
import { UpdatePhoneDto } from './dto/update-phone.dto';
import { Response } from 'express';

@Controller('phone')
export class PhoneController {
  constructor(private readonly phonesService: PhoneService) {}

  @Post()
  create(@Body() createPhoneDto: CreatePhoneDto) {
    return this.phonesService.create(createPhoneDto);
  }

  @Get()
  findAll(
    @Query('pageSize') pageSize: string,
    @Query('page') page: string,
    @Query('query') query: string,
  ) {
    return this.phonesService.findAll({
      pageSize: +(pageSize || 10),
      page: +(page || 1),
      query,
    });
  }

  @Get(':slug')
  async findOne(@Param('slug') slug: string, @Res() res: Response) {
    try {
      res.json(await this.phonesService.findBySlug(slug));
    } catch (e) {
      return res
        .status(HttpStatus.NOT_FOUND)
        .json({ status: HttpStatus.NOT_FOUND, error: 'phone not found' });
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePhoneDto: UpdatePhoneDto) {
    return this.phonesService.update(+id, updatePhoneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.phonesService.remove(+id);
  }
}