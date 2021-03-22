import { sharedStylesheetJitUrl } from '@angular/compiler';
import { Component, EventEmitter, Injectable, Output, OutputDecorator } from '@angular/core';
import { Post } from '../post'
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  enteredContent='';
  enteredTitle='';
  @Output() postCreated: EventEmitter<Post> = new EventEmitter<Post>();
  onAddPost(){
    const post={title:this.enteredTitle,content:this.enteredContent};
    this.postCreated.emit(post);
  }
}
