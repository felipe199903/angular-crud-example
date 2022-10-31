import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { take } from "rxjs/operators";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class PeopleService {
  constructor(private readonly http: HttpClient) {}

  public getAllPeoples() {
    return this.http.get<any>(`${environment.url}/peoples`).pipe(take(1));
  }

  public createPeople(
    nameValue: string,
    usernameValue: string,
    telefoneValue: string,
    emailValue: string
  ) {
    return this.http
      .post<any>(`${environment.url}/peoples`, {
        name: nameValue,
        username: usernameValue,
        telefone: telefoneValue,
        email: emailValue,
      })
      .pipe(take(1));
  }

  public deletePeople(indexValue: number) {
    return this.http
      .delete<any>(`${environment.url}/peoples/` + indexValue)
      .pipe(take(1));
  }
  public edit(
    indexValue: number,
    nameValue: string,
    usernameValue: string,
    telefoneValue: string,
    emailValue: string
  ) {
    return this.http
      .put<any>(`${environment.url}/peoples/` + indexValue, {
        name: nameValue,
        username: usernameValue,
        telefone: telefoneValue,
        email: emailValue,
      })
      .pipe(take(1));
  }
}
