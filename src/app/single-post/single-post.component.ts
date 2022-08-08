import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostFormComponent } from '../post-form/post-form.component';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  @Input() post:Post = {} as Post;
  constructor() { }

  ngOnInit(): void {
  }
 
}
