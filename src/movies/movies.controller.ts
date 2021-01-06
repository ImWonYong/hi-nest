import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDTO } from './dto/create-movie.dto';
import { UpdateMovieDTO } from './dto/update-movie.dto';

@Controller('movies') // 기본 라우터
export class MoviesController {
  // express.js처럼 수동으로 import 하는 것은 NestJS에서 기본적으로 쓰지 않는 방법
  // NestJS에서는 우리가 요청해야 함.
  constructor(private readonly moviesService: MoviesService) {}

  @Get() // express.js 어플리케이션 쓸 때의 그 라우터
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get('search') // Get :id 밑에 있으면 search를 id로 판단해버리는 express와 같은 일이 일어남
  search(@Query('year') searchingYear: string) {
    return `We are searching for a movie made after: ${searchingYear}`;
  }

  @Get(':id')
  getOne(@Param('id') movieId: number): Movie {
    // @Param 데코레이터를 사용하면 NestJS는 url에 있는 id를 요청한 다는 것을 알게 됨
    return this.moviesService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData: CreateMovieDTO) {
    return this.moviesService.create(movieData);
  }

  @Delete(':id')
  remove(@Param('id') movieId: number) {
    return this.moviesService.deleteOne(movieId);
  }

  @Patch(':id')
  path(@Param('id') movieId: number, @Body() updateData: UpdateMovieDTO) {
    return this.moviesService.update(movieId, updateData);
  }
}
