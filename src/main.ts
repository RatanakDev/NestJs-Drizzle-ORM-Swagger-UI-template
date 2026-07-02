// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(process.env.PORT ?? 3040);
// }
// bootstrap();

import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ... your existing config (ValidationPipe, etc.)

  const config = new DocumentBuilder()
    .setTitle('NestJs API')
    .setDescription('API documentation for NestJs backend')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api/', app, document);

  await app.listen(3040);
}
bootstrap();
