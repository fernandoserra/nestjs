import { IsString, IsNotEmpty, IsEmail, Length } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreatePersonDto {
    @IsString()
    @IsNotEmpty()
    @Length(6)
    readonly name: string;

    @IsString()
    @IsEmail()
    readonly email: string;
}

export class UpdatePersonDto extends PartialType(CreatePersonDto) {}
