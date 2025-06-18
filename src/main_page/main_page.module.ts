import { Module } from '@nestjs/common';
import { MainPageService } from './main_page.service';
import { MainPageController } from './main_page.controller';

@Module({
  providers: [MainPageService],
  controllers: [MainPageController]
})
export class MainPageModule {}
