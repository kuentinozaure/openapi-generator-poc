import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ExampleView } from './models/example.view';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { examplesMock } from './mocks/examples.mock';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Find all examples' })
  @ApiOkResponse({
    description: 'Examples found.',
    type: [ExampleView],
  })
  getExample(): ExampleView[] {
    return examplesMock;
  }
}
