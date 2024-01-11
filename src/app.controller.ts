import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('wegoo')
  getWegoo(): string {
    return 'wegoo is working';
  }

  @Get('codwide')
  getCodWide(): string {
    return 'codwide is working';
  }
}
