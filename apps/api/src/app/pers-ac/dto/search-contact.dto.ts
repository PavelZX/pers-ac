import { IsOptional } from 'class-validator';

export class SearchContactDto {
  @IsOptional()
  term?: string;
}
