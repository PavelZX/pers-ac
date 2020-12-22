import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('contact')
export class ContactEntity {
  @PrimaryGeneratedColumn('uuid') id: string;
  @Column({ type: 'varchar', nullable: false }) title: string;
  @Column({ type: 'date', nullable: true }) watchedOn: Date;
  @Column({ type: 'varchar', nullable: true }) genre: string;
  @Column({ type: 'integer', nullable: true }) rating: number;
}
