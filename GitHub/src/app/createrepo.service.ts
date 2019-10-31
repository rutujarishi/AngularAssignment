import { Injectable } from '@angular/core';
// import { HttpClient } from 'selenium-webdriver/http';
import { HttpClient, HttpHeaders} from '@angular/common/http';


import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CreaterepoService {

  private _url : string = 'https://api.github.com/user/repos?access_token=c9dee69c13a42140561a56fa15cf1a20ecb8649a';

  constructor( private http: HttpClient) { }
  createRepo(repoName: string, description: string) {
    return this.http.post(this._url,
      {
        "name": repoName,
        "description": description,
        "homepage": "https://github.com",
        "private": false,
        "has_issues": true,
        "has_projects": true,
        "has_wiki": true
      });
  }
  deleteRepo(reponame: string) {
    return this.http.delete(this._url
    );
  }
}

