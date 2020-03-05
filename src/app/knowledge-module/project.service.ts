import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from './project';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private url = './assets/Projects.json';

  constructor(private http: HttpClient) { }
  getProject(): Observable<[Project]> {
    return this.http.get<[Project]>(this.url);




  }


}
