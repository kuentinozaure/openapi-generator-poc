import { ApiProperty } from '@nestjs/swagger';
import { ExampleEnum } from 'src/enums/example.enum';
import { LocalTime } from 'src/types/local-time.type';

export class ExampleView {
  @ApiProperty({
    type: String,
  })
  name!: string;

  @ApiProperty({
    enum: ExampleEnum,
    enumName: 'ExampleEnum',
  })
  status!: ExampleEnum;

  @ApiProperty({
    type: [String],
    nullable: true,
  })
  tags!: string[] | null;

  @ApiProperty({
    type: String,
    format: 'HH:mm:ss',
    example: '07:05:00',
  })
  date!: LocalTime;
}
