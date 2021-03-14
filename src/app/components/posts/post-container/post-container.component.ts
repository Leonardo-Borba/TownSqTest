import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { Post } from 'src/app/models/Post';
import { PostStoreService } from 'src/app/services/stores/PostStore.service';

@Component({
  selector: 'app-post-container',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.scss']
})
export class PostContainerComponent implements OnInit {

  allPosts: Post[] = [];
  posts: Post[] = [];
  post$: Subject<Post> = new Subject();
  slice = 6;
  datasetSize = 0;

  constructor(private postStore: PostStoreService, private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Read All Posts")
    this.postStore.posts$.subscribe(data => {
      this.datasetSize = data.length;
      this.allPosts = data;
      this.posts = data.slice(0, this.slice)
    })
  }

  handlePostClicked(post: Post){
    this.post$.next({...post});
  }

  increaseSlice(){
    this.slice += 10;
    this.posts = this.allPosts.slice(0, this.slice)
  }
}
