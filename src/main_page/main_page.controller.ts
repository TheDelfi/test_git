import { Controller, Get, Render } from '@nestjs/common';
import { MainPageService } from './main_page.service';

@Controller()
export class MainPageController {
    constructor(private readonly service:MainPageService){}

    @Get()
    @Render('main')
    mainPage(){
        return {}
    }
}
