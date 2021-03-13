import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Post } from 'src/app/models/Post';
import { PostService } from '../communication/impl/Post.service';

@Injectable({
  providedIn: 'root'
})
export class PostStoreService {

  private _posts: BehaviorSubject<Post[]>;
  public posts$:Observable<Post[]>;

  constructor(private postService: PostService) { 
   this._posts = new BehaviorSubject<Post[]>([])
   this.posts$ = this._posts.asObservable();
    postService.getAll().subscribe((data) => this._posts.next([...data]))
  }

  get posts(): Post[] {
    return this._posts.getValue();
  }
  set posts(posts: Post[]){
    this._posts.next(posts);
  }

  editPost(post: Post): void {
    const index = this.getIndexOfPost(post);
    if(index < 0){
      throw 'notFound';
    }
    const posts = [...this.posts];
    posts[index] = post;
    this.posts = posts;
  }

  private getIndexOfPost(post: Post): number{
    for (const [index, iPost] of this.posts.entries()) {
      if(iPost.id === post.id)
        return index;
    }
    return -1;
  }
}
