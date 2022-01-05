import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common'; //lo agregamos para validar lo que agregamos en el dto
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
        }),
    );

    const config = new DocumentBuilder()
        .setTitle('API')
        .setDescription('Nest Fernando S.')
        .setVersion('1.0')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, document);

    //Habilitando Cors (para ser consultada fuera del dominio donde se hace el deploy)
    app.enableCors();
    await app.listen(process.env.PORT || 3000);
    //await app.listen(3000);
}
bootstrap();
