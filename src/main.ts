import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from 'process';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const PORT = process.env.SERVER_PORT || 4200;
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('Nest js lesson')
    .setDescription('Nest js docs')
    .setVersion('1.0.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api-docs', app, document);

  await app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
}
bootstrap();
