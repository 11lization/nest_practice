import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  //AppModule은 루트 모듈이라 생각하자.
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
