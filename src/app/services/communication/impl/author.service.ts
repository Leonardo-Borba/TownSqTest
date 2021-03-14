import { Injectable } from '@angular/core';
import { CommunicationService } from '../Communication.service';
import { Author } from "../../../models/Author";
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthorService extends CommunicationService<Author> {

  constructor(http: HttpClient) {
    super(http);
  }

  getPathForObject(): string {
    return environment.USERS;
  }
}
