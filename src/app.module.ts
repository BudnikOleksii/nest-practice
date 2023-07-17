import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import * as process from 'process';

import { User } from './user/user.model';
import { RolesController } from './roles/roles.controller';
import { RolesModule } from './roles/roles.module';
import { Role } from './roles/roles.model';
import { UserRoles } from './roles/user-roles.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_USER,
      models: [User, Role, UserRoles],
      autoLoadModels: true,
    }),
    UserModule,
    RolesModule,
  ],
  controllers: [RolesController],
})
export class AppModule {}
