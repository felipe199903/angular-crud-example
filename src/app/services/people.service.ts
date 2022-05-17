import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { take } from "rxjs/operators";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private readonly http: HttpClient) { }

  public getAllPeoples()  {
    return this.http.get<any>(`${environment.url}/peoples`).pipe(take(1));
  }

  public createPeople(nameValue: string)  {
    return this.http.post<any>(`${environment.url}/peoples`, { name: nameValue }).pipe(take(1));
  }

  public deletePeople(indexValue: number)  {
    return this.http.delete<any>(`${environment.url}/peoples/` + indexValue).pipe(take(1));
  }
  public edit(indexValue: number, nameValue: string){
    return this.http.patch<any>(`${environment.url}/peoples`+ indexValue ,{name: nameValue}).pipe(take(1));
  }
}

