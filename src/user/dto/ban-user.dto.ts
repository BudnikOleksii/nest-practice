import { IsNumber, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class BanUserDto {
  @ApiProperty({ example: 1, description: 'Valid user id' })
  @IsNumber()
  readonly userId: number;

  @ApiProperty({ example: 'Did something wrong', description: 'Reason for ban' })
  @IsString()
  @MinLength(3)
  readonly banReason: string;
}
