import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/Post';
import { environment } from 'src/environments/environment';
import { CommunicationService } from '../Communication.service';

@Injectable({
  providedIn: 'root'
})
export class PostService extends CommunicationService<Post>{

constructor(http: HttpClient) {
  super(http);
}
  getPathForObject(): string {
    return environment.POSTS;
  }

}
