import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { first } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export abstract class CommunicationService<T> {
  
  private BASE_URL = environment.API_BASE_URL;

  constructor(private http: HttpClient) { }

  abstract getPathForObject(): string;

  protected getUrlForObject(): string {
    return this.BASE_URL + this.getPathForObject();
  }

  public getAll(): Observable<T[]> {
   return this.http.get<T[]>(this.getUrlForObject()).pipe(first());
  }

  public getById(id: number | string) : Observable<T> {
    const url = this.getUrlForObject() + id;
    return this.http.get<T>(url).pipe(first());
  }
}
