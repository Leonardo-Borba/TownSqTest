import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from 'src/app/models/Post';
import { PostStoreService } from 'src/app/services/stores/PostStore.service';

@Component({
  selector: 'app-post-container',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.scss']
})
export class PostContainerComponent implements OnInit {

  posts: Post[] = [];
  post$: Subject<Post> = new Subject();

  constructor(private postStore: PostStoreService) { }

  ngOnInit(): void {
    this.postStore.posts$.subscribe(data => this.posts = data)
  }

  handlePostClicked(post: Post){
    this.post$.next({...post});
  }

}
