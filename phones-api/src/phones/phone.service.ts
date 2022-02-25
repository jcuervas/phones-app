import { Inject, Injectable } from '@nestjs/common';
import { CreatePhoneDto } from './dto/create-phone.dto';
import { UpdatePhoneDto } from './dto/update-phone.dto';
import { Repository } from 'typeorm';
import { Phone } from './entities/phone.entity';
import { constants } from '../contants';

export interface QueryOptions {
  pageSize: number;
  page: number;
  query?: string;
}

@Injectable()
export class PhoneService {
  constructor(
    @Inject(constants.phoneRepository)
    private repository: Repository<Phone>,
  ) {}

  create(createPhoneDto: CreatePhoneDto) {
    return this.repository.create(createPhoneDto);
  }

  findAll(params: QueryOptions) {
    const { pageSize, page, query } = params;
    const builder = this.repository.createQueryBuilder('p');
    if (query) {
      builder.where('p.name like :query or p.description like :query', {
        query: `%${params.query}%`,
      });
    }

    return builder
      .take(pageSize)
      .skip(pageSize * (page - 1))
      .getManyAndCount();
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  findBySlug(slug: string) {
    return this.repository.findOneOrFail({ slug });
  }

  update(id: number, updatePhoneDto: UpdatePhoneDto) {
    return this.repository.update(id, updatePhoneDto);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
