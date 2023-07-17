import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, MinLength } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({ example: 'New nest.js feature!', description: 'Post title' })
  @IsString()
  @MinLength(3)
  readonly title: string;

  @ApiProperty({ example: 'Nest.js introduced new feature...', description: 'Post content' })
  @IsString()
  @MinLength(3)
  readonly content: string;

  @ApiProperty({ example: 1, description: 'Author id' })
  @IsNumber()
  readonly userId: number;
}
