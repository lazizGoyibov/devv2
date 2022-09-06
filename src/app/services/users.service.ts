import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { Team } from '../teamModel/team.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
 
  constructor(private http: HttpClient) { }


  getData(): Observable<any> {
    return this.http.get(`https://us-central1-devhub-599b1.cloudfunctions.net/devhub_api/api/team/list`)
    .pipe(map((data:any) => {
      console.log(data)
      let dataInner = data.data
      return dataInner
    }))
  }
}
