import { Component, Input, OnInit } from '@angular/core';
import { Author } from 'src/app/models/Author';
import { AuthorService } from 'src/app/services/communication/impl/author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {

  constructor(private authorService: AuthorService) { }

  @Input() authorId!: number;
  author!: Author;

  ngOnInit(): void {
    this.authorService.getById(this.authorId).subscribe(author => this.author = author);
  }

}
