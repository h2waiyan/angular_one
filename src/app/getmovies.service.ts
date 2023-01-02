import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetmoviesService {

  constructor(
    private http : HttpClient
  ) { }

  getMovies () {
    return this.http.get('https://api.themoviedb.org/3/movie/550?api_key=050c28541f900007285c3020069bfd62');
  }

  getPopularMovie(){
    return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=050c28541f900007285c3020069bfd62&language=en-US');
  }

  getTopRatedMovies(){
    return this.http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=050c28541f900007285c3020069bfd62&language=en-US');
  }



  showAlert(){
    console.log("Hello World");
  }
}
