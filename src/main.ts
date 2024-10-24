import { ApiDocumentation } from './config/apiDocumentation'
import { ENVIROMENT } from './config/env';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: '*', 
    methods: 'GET,PUT,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type,Authorization',
  });
  
  const config = new DocumentBuilder()
  .setTitle('FromHel Studio Backend Documentation')
  .setDescription('Routes')
  .setVersion('0.0.1')
  .build()
  
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api/docs', app, document)
  ApiDocumentation.setup(app)
  
  await app.listen(process.env.PORT|| 3000);
  Logger.log(`=============${process.env.USER_PORT || ENVIROMENT.USER_PORT}==============`)
  Logger.log(`MONGO URL: ${process.env.MONGO_URL_PRD || ENVIROMENT.MONGO_URL_PRD}`)



}
bootstrap();
