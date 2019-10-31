import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleterepoService {

  private url = 'https://api.github.com/repos/rutujarishi/';
  private url1 = '?access_token=c9dee69c13a42140561a56fa15cf1a20ecb8649a';
  public uri: string;

  constructor(private http: HttpClient) {
  }

  deleteRepo(reponame: string) {
    this.uri = this.url + reponame + this.url1;
    try {
      return this.http.delete(this.uri);
    } catch (e) {
      return null;
    }
  }
}

