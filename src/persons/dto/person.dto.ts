import { IsString, IsNotEmpty, IsEmail, Length } from 'class-validator';
//import { PartialType } from '@nestjs/mapped-types';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreatePersonDto {
    @IsString()
    @IsNotEmpty()
    @Length(6)
    readonly name: string;

    @IsString()
    @IsEmail()
    @ApiProperty({ description: 'mail required' })
    readonly email: string;
}

export class UpdatePersonDto extends PartialType(CreatePersonDto) {}
