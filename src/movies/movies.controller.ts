import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Patch,
  Body,
  Query,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';

//NestJS : 우리가 필요한 것은 요청해서 갖다 쓰자!

//'movies'가 이 controller를 위한 url이다.
@Controller('movies')
export class MoviesController {
  constructor(private readonly movieService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.movieService.getAll();
  }

  //movies/search?year=2000 <- 이런 형식으로 query를 보낼 것이다.
  //@Get(':id')보다 위에 있어야 한다. Why? 이렇게 해야 search인지 검사한 다음 아니면 :id에 집어넣을 수 있으니까.
  // @Get('search')
  // search(@Query('year') searchingYear: string) {
  //   return `We are searching for a movie made after: ${searchingYear}`;
  // }

  //'/:id'에 있는 id처럼, NestJS에서 url의 값을 이용하기 위해서는 반드시 요청해야한다. -> @Param('id') 없이는 id를 인식하지 못한다.
  @Get(':id')
  getOne(@Param('id') movieId: number): Movie {
    return this.movieService.getOne(movieId);
  }

  //body는 url의 일부인 param과 달리, front의 JSON에 담겨있는 정보인가보다.
  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.movieService.create(movieData);
  }

  @Delete(':id')
  remove(@Param('id') movieId: number) {
    return this.movieService.deleteOne(movieId);
  }

  //put -> 리소스 전체 업데이트 / patch -> 리소스 일부 업데이트
  @Patch(':id')
  patch(@Param('id') movieId: number, @Body() updateData) {
    return this.movieService.update(movieId, updateData);
  }
}
