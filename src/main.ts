import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common'; //lo agregamos para validar lo que agregamos en el dto
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
        }),
    );
    //Habilitando Cors (para ser consultada fuera del dominio donde se hace el deploy)
    app.enableCors();
    await app.listen(3000);
}
bootstrap();
