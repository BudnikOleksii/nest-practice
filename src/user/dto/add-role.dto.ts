import { IsNumber, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AddRoleDto {
  @ApiProperty({ example: 1, description: 'Valid user id' })
  @IsNumber()
  readonly userId: number;

  @ApiProperty({ example: 'ADMIN', description: 'Valid role' })
  @IsString()
  @MinLength(3)
  readonly value: string;
}
