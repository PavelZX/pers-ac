import { PersAcService } from './pers-ac.service';
import {
  Get,
  Post,
  Req,
  Param,
  Body,
  Controller,
  Put,
  Query,
  HttpCode,
  Delete,
  ParseUUIDPipe
} from '@nestjs/common';
import { ContactListDto } from './dto/contact.list.dto';
import { AddContactDto } from './dto/contact.create.dto';
import { ContactDto } from './dto/contact.dto';
import { SearchContactDto } from './dto/search-contact.dto';

@Controller('api/pers-ac')
export class PersAcController {
  constructor(private readonly persAcService: PersAcService) {}

  @Get()
  async findAll(@Query() query: SearchContactDto): Promise<ContactListDto> {
    const contacts = await this.persAcService.searchContacts(
      query.term || ''
    );
    return { contacts };
  }

  @Post()
  async create(
    @Body() addContactDto: AddContactDto,
    @Req() req: any
  ): Promise<ContactDto> {
    return await this.persAcService.addContact(addContactDto);
  }

  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() contactDto: ContactDto
  ): Promise<ContactDto> {
    return await this.persAcService.updateContact(id, contactDto);
  }

  @Delete(':id')
  @HttpCode(204)
  async destory(
    @Param('id', new ParseUUIDPipe()) id: string
  ): Promise<ContactDto> {
    return await this.persAcService.destoryContact(id);
  }
}
