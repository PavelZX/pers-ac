import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ContactEntity } from './entity/contact.entity';
import { Repository } from 'typeorm';

import { ContactDto } from './dto/contact.dto';
import { toContactDto } from './mapper';
import { AddContactDto } from './dto/contact.create.dto';

@Injectable()
export class PersAcService {
  constructor(
    @InjectRepository(ContactEntity)
    private readonly persAcRepo: Repository<ContactEntity>
  ) {}

  async searchContacts(term: string): Promise<ContactDto[]> {
    const contacts = await this.persAcRepo.find({
      where: `genre ILIKE '%${term}%' or title ILIKE '%${term}%'`
    });
    return contacts.map(contact => toContactDto(contact));
  }

  async addContact(addContactDto: AddContactDto): Promise<ContactDto> {
    const { title, watchedOn, genre, rating } = addContactDto;

    const contact: ContactEntity = await this.persAcRepo.create({
      title,
      watchedOn,
      genre,
      rating
    });

    await this.persAcRepo.save(contact);

    return toContactDto(contact);
  }

  async updateContact(id: string, contactDto: ContactDto): Promise<ContactDto> {
    const { title, watchedOn, genre, rating } = contactDto;

    let contact: ContactEntity = await this.persAcRepo.findOne({
      where: { id }
    });

    if (!contact) {
      throw new HttpException(`Contact doesn't exist`, HttpStatus.BAD_REQUEST);
    }

    contact = {
      id,
      title,
      watchedOn,
      genre,
      rating
    };

    await this.persAcRepo.update({ id }, contact); // update

    return toContactDto(contact);
  }

  async destoryContact(id: string): Promise<ContactDto> {
    const contact: ContactEntity = await this.persAcRepo.findOne({
      where: { id }
    });

    if (!contact) {
      throw new HttpException(`Contact doesn't exist`, HttpStatus.BAD_REQUEST);
    }

    await this.persAcRepo.delete({ id });

    return toContactDto(contact);
  }
}
