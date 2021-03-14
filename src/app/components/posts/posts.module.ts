import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostContainerComponent } from './post-container/post-container.component';
import { BrowserModule } from '@angular/platform-browser';
import { PostComponent } from './post/post.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { AuthorComponent } from './author/author.component';
import {MatIconModule} from '@angular/material/icon';
import { PipesModule } from 'src/app/pipes/pipes.module';



@NgModule({
  declarations: [PostContainerComponent, PostComponent, PostDetailsComponent, AuthorComponent],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    PipesModule
  ],
  exports: [PostContainerComponent]
})
export class PostsModule { }
