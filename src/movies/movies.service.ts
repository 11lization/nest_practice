import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  //fake database이고, 진짜 database가 온다면 각각에 대한 query가 오겠지?
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }
}
