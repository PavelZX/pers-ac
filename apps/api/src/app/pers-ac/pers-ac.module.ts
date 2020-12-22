import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactEntity } from './entity/contact.entity';
import { PersAcController } from './pers-ac.controller';
import { PersAcService } from './pers-ac.service';

@Module({
  imports: [TypeOrmModule.forFeature([ContactEntity])],
  controllers: [PersAcController],
  providers: [PersAcService]
})
export class PersAcModule {}
