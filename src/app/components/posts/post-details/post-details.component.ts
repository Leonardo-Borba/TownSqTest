import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/Post';
import { PostStoreService } from 'src/app/services/stores/PostStore.service';
import { BodyModificationService } from 'src/app/services/util/BodyModification.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  post!: Post; 
  open = false;

  constructor(private bodyService: BodyModificationService, private postStore: PostStoreService) { }

  @Input() public postObservable!: Observable<Post>;

  ngOnInit(): void {
    this.postObservable.subscribe( (val) => this.setup(val))
  }

  private toggleBodyScroll(){
    this.bodyService.toggleClass("no-scroll");
  }

  setup(val: Post): void {
    this.post = val;
    this.open = true;
    this.toggleBodyScroll();
  }

  closeInternal(){
    this.open = false;
    this.toggleBodyScroll();
  }

  close(event: Event){
    this.closeInternal();
    event.stopPropagation();
  }

  edit(){
    this.postStore.editPost(this.post);
    this.closeInternal();
  }
}
