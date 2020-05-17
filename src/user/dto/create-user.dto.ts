import { IsEmail, IsString, IsNotEmpty, Matches, IsOptional, IsEnum } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IAddress } from "../interfaces/address.interface";

export class CreateUserDto {
    @ApiProperty()
    @IsEmail()
    readonly email: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly username: string;
    // readonly avatar: string;
    // readonly avatarId: string;

    @ApiPropertyOptional()
    @IsString()
    readonly name: string;

    @ApiPropertyOptional()
    @IsString()
    readonly surname: string;

    // readonly gender: string;
    // readonly address: IAddress;
    // readonly profession: string;
    // readonly searchField: string;

    // @ApiProperty()
    // @IsString()
    // @IsOptional()
    // readonly phone: string;
    readonly roles: string;
    @IsString()
    @IsNotEmpty()
    @Matches(
      /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/,
      { message: 'Weak password' },
    )
    @ApiProperty()
    readonly password: string;
}