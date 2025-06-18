import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { MainPageService } from './main_page.service';

@Controller()
export class MainPageController {
    constructor(private readonly service:MainPageService){}

    @Get()
    @Render('main')
    mainPage(){
        return {}
    }



    @Post('mainPOST')
    mainPost(@Body() body:any){
        console.log(body)
    }
}
