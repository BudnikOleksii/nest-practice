import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class CreateRoleDto {
  @ApiProperty({ example: 'ADMIN', description: 'Role value' })
  @IsString()
  @MinLength(3)
  readonly value: string;

  @ApiProperty({ example: 'administrator', description: 'Role description' })
  @IsString()
  @MinLength(3)
  readonly description: string;
}
