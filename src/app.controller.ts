import { Controller, Get, Render, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    redirect(@Res() res) {
        return res.redirect('/public/index');
    }

    /*@Get()
    @Render('public/index.html')
    root() {
        return {};
    }*/

    @Get()
    getIndex(): string {
        return 'hola';
    }

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }
}
