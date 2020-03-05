import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Projects } from './projects';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private url = './assets/projects.json';

  constructor(private http: HttpClient) { }

  getProjects(): Observable<[Projects]> {

    return this.http.get<[Projects]>(this.url);
  }



}

