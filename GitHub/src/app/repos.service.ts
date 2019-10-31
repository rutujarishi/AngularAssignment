
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { Observable } from 'rxjs';
import {Injectable} from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ReposService {

  private url: string = 'https://api.github.com/users/rutujarishi/'+
  'repos?access_token=c9dee69c13a42140561a56fa15cf1a20ecb8649a';
  constructor( private http: HttpClient) { }

 getAllRepo() {

    return this.http.get(this.url);
  }
}

export class RepoService {
}
