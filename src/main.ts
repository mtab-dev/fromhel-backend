import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.USER_PORT);

  const config = new DocumentBuilder()
  .setTitle('FromHel Studio Backend Documentation')
  .setDescription('Routes')
  .setVersion('0.0.1')
  .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('docs', app, document)

  void app.listen(process.env.USER_PORT)

}
bootstrap();
