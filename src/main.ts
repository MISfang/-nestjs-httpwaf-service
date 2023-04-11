import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(
    '%c 🍋 项目地址:',
    'font-size:16px;color:#ffdd4d',
    'http://127.0.0.1:3001/',
  );
  await app.listen(3001);
}
bootstrap();
