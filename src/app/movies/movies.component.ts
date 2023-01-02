import { Component, OnInit } from '@angular/core';
import { GetmoviesService } from '../getmovies.service';
import { MoviesResponse, Result } from './movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(
    private getmovieservice: GetmoviesService
  ) { }

  ngOnInit(): void {
    this.getPopularMovies();
    // this.getTopRatedMovies();
  }

  moviename = '';
  imgurl = '';

  popularMovies? : Result[];


  getSingleMovie(){
    this.getmovieservice.getMovies().subscribe((response: any) => {
      // console.log();
      this.moviename = response['original_title'];
      this.imgurl = 'http://image.tmdb.org/t/p/w500/' + response['backdrop_path'];
    }); // return Observable
  }

  getPopularMovies(){
    this.getmovieservice.getPopularMovie().subscribe((response: MoviesResponse) => {
      this.popularMovies = response.results;
      // console.log(this.popularMovies[0].original_title);
      
    })
  }
}
