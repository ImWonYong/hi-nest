import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // ture로 해주면 아무 데코레이터가 없는 어떠한 property의 오브젝트는 걸러줌.
      forbidNonWhitelisted: true, // 이산한 것을 보내면 리퀘스트 자체를 막아줌
      transform: true, // 유저들이 보낸 것을 우리가 원하는 실제 타입으로 바꿔줌.
    }),
  );
  await app.listen(3000);
}
bootstrap();
