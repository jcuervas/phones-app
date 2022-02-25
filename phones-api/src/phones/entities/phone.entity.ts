import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Phone {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  @Index({ unique: true })
  slug: string;

  @Column()
  manufacturer: string;

  @Column({ type: 'text' })
  description: string;

  @Column()
  color: string;

  @Column({ type: 'double', scale: 2 })
  price: number;

  @Column({ type: 'json' })
  imageFileName: string[];

  @Column()
  screen: string;

  @Column()
  processor: string;

  @Column()
  ram: string;
}
