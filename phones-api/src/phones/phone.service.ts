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
    const slug = createPhoneDto.name
      .normalize('NFD')
      .replace(/\p{Diacritic}/gu, '')
      .toLowerCase()
      .replace(/\s+/g, '-');
    return this.repository.save({ ...createPhoneDto, slug });
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

  update(slug: string, updatePhoneDto: UpdatePhoneDto) {
    return this.repository
      .createQueryBuilder('p')
      .update(updatePhoneDto)
      .where('slug = :slug', { slug })
      .execute();
  }

  remove(slug: string) {
    return this.repository
      .createQueryBuilder('p')
      .delete()
      .where('slug = :slug', { slug })
      .execute();
  }
}
