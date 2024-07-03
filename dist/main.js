"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apiDocumentation_1 = require("./config/apiDocumentation");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.enableCors({
        origin: '*',
        methods: 'GET,PUT,POST,DELETE,OPTIONS',
        allowedHeaders: 'Content-Type,Authorization',
    });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('FromHel Studio Backend Documentation')
        .setDescription('Routes')
        .setVersion('0.0.1')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api/docs', app, document);
    apiDocumentation_1.ApiDocumentation.setup(app);
    await app.listen(process.env.USER_PORT);
    common_1.Logger.log(`=============${process.env.USER_PORT}==============`);
    common_1.Logger.log(`MONGO URL: ${process.env.MONGO_URL_PRD}`);
}
bootstrap();
//# sourceMappingURL=main.js.map