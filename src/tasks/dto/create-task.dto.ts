import { IsNotEmpty, IsString, IsBoolean } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  description: string;

  @IsBoolean()
  finished: boolean;
}
