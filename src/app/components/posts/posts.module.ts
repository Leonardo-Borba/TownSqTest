import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostContainerComponent } from './post-container/post-container.component';
import { BrowserModule } from '@angular/platform-browser';
import { PostComponent } from './post/post.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [PostContainerComponent, PostComponent, PostDetailsComponent],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [PostContainerComponent]
})
export class PostsModule { }
