import { ContactEntity } from './entity/contact.entity';
import { ContactDto } from './dto/contact.dto';

export const toContactDto = (data: ContactEntity): ContactDto => {
  const { id, title, watchedOn, genre, rating } = data;

  const contactDto: ContactDto = {
    id,
    title,
    watchedOn,
    genre,
    rating
  };

  return contactDto;
};
