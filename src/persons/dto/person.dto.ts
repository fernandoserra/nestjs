import {
    IsString,
    IsNotEmpty,
    IsEmail,
    Length,
    IsOptional,
    IsPositive,
    Min,
    ValidateIf,
} from 'class-validator';
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

export class FilterDto {
    @IsOptional()
    @IsPositive()
    limit: number;

    @IsOptional()
    @Min(0)
    offset: number;

    @IsOptional()
    @IsPositive()
    minPrice: number;

    @ValidateIf((item) => item.minPrice)
    @IsPositive()
    maxPrice: number;
}
