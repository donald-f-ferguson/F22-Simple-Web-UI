import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ImdbArtist } from './imdbartist';
import { ImdbArtistRsp } from "./imdbartist";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ImdbServiceService {

  imdbArtists: ImdbArtist[];
  imdbUrl: string;

  constructor(private http: HttpClient) {
    // console.log('The URL = ' + window.location.href);
    this.imdbArtists = undefined;
  }

  getImdbServiceUrl(): string {
    const theUrl = window.location.href;
    let result: string;

    // This is some seriously bad code.
    // If you do this on a job interview, you did not learn this in my class.
    if (theUrl.includes('amazonaws')) {
      /* This can change over time */
      result = 'ec2-54-242-71-165.compute-1.amazonaws.com:5000/imdb/artists?primaryName=';
    }
    else {
      result = 'http://127.0.0.1:5001/api/artists/';
    }
    return result;
  }


  /** GET heroes from the server */
  getArtists(artistNconst): Observable<ImdbArtist> {
    let theUrl: string;

    theUrl = this.getImdbServiceUrl() + artistNconst;
    return this.http.get<ImdbArtist>(theUrl);
  }
}
