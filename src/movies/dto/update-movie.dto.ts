import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDTO } from './create-movie.dto';

/*
export class UpdateMovieDTO {
  @IsString()
  readonly title?: string;
  @IsNumber()
  readonly year?: number;
  @IsString({ each: true }) // 하나 하나 다 검사하는 옵션
  readonly genres?: string[];
}

// 사람들이 movie를 만들기 위해 필요한 것들을 나열
// 하지만 읽기 전용이 필수는 아님

*/

// 위처럼 할 수 있지만 부분 타입이라는 방식을 써서 해볼 것임
// updateMovieDTO는 CreateMovieDto랑 똑같음
export class UpdateMovieDTO extends PartialType(CreateMovieDTO) {}
