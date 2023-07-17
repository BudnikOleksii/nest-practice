import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

import { Role } from './roles.model';
import { User } from '../user/user.model';

@Table({ tableName: 'user_roles', createdAt: false, updatedAt: false })
export class UserRoles extends Model<UserRoles> {
  @ApiProperty({ example: 1, description: 'Uniq id' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @ForeignKey(() => Role)
  @Column({ type: DataType.INTEGER })
  roleId: number;
}
