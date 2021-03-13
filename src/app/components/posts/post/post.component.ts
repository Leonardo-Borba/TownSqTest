import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {


  @Input() public post!: Post;
  @Output() public clickEvent = new EventEmitter<Post>()

  constructor() { }

  handleClick(){
    this.clickEvent.emit(this.post);
  }
}
