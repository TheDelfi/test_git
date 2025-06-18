import { Module } from '@nestjs/common';
import { MainPageService } from './main_page.service';
import { MainPageController } from './main_page.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../entities_DB/user_DB';

@Module({
  imports: [TypeOrmModule.forFeature(
    [
      User,
    ])],

  providers: [MainPageService],
  controllers: [MainPageController]
})
export class MainPageModule {}
