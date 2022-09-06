import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { Team } from '../teamModel/team.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { }



  getData():Observable<Team[]> {
    return this.http.get(`https://us-central1-devhub-599b1.cloudfunctions.net/devhub_api/api/portfolio/list`)
    .pipe(map((item:any) => {
     let dataIn = item.data
     return dataIn
    }))
  }
}
