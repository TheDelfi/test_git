import { Controller, Get, Render, UseGuards } from '@nestjs/common';
import { CheckLoginGuard } from '../check_login/check_login.guard';

@Controller('check')
export class LogCheckController {

    @Get()
    @UseGuards(CheckLoginGuard)
    @Render('check')
    lol(){
        return {name:'Delfi'}
    }
}
