import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMovieDTO {
  @IsString()
  readonly title: string;
  @IsNumber()
  readonly year: number;
  @IsOptional()
  @IsString({ each: true }) // 하나 하나 다 검사하는 옵션
  readonly genres: string[];
}

//사람들이 movie를 만들기 위해 필요한 것들을 나열
