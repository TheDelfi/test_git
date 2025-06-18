import { NestApplication, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as path from 'path'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  app.useStaticAssets(path.join(__dirname, '..','static'),{
    prefix:'/static'
  })

  app.setBaseViewsDir(path.join(__dirname, '..','template'))
  app.setViewEngine('ejs')

  await app.listen(3000);
}
bootstrap();
