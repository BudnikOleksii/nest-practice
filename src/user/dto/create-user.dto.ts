import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'user@gmail.com', description: 'Valid email' })
  readonly email: string;

  @ApiProperty({ example: '12345678', description: 'Password' })
  readonly password: string;
}
