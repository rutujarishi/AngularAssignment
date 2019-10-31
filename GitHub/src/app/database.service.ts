import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Database } from './database'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private usersUrl: string;
  private uri: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/getAllRepos';
    this.uri = 'http://localhost:8080/create';
  }

  public findAll(): Observable<any> {
    return this.http.get(this.usersUrl);
  }

  public save(name: string, id: string) {
    console.log('save working');
    // const httpParams = new HttpParams().set('id', id).set('name', name);
    return this.http.post(this.uri, {
      name,
      id
    });
  }
}
