import { ExampleEnum } from 'src/enums/example.enum';
import { ExampleView } from 'src/models/example.view';

export const examplesMock: ExampleView[] = [
  {
    name: 'hello',
    status: ExampleEnum.status_1,
    tags: null,
    date: '12:11:00',
  },
  {
    name: 'hello',
    status: ExampleEnum.status_2,
    tags: ['test', 'test 2'],
    date: '12:11:00',
  },
];
