import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './roles.model';

@Injectable()
export class RolesService {
  constructor(@InjectModel(Role) private roleRepository: typeof Role) {}
  async createRole(dto: CreateRoleDto) {
    const candidate = await this.roleRepository.findOne({ where: { value: dto.value } });

    if (candidate) {
      throw new BadRequestException('Current role already exists');
    }

    return this.roleRepository.create(dto);
  }

  async getRoleByValue(value: string) {
    const role = await this.roleRepository.findOne({ where: { value } });

    if (!role) {
      throw new BadRequestException('Role not found');
    }

    return role;
  }
}
