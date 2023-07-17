import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Post } from './posts.model';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post) private postRepository: typeof Post) {}
  async createPost(postDto: CreatePostDto, image) {
    const fileName = '';
    return this.postRepository.create({ ...postDto, image: fileName });
  }
}
