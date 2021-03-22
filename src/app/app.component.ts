import { Component, Output, Input } from "@angular/core";
import { Post } from "../app/posts/post";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  storedPosts: Post[] = [];
  onAddedPost(post: Post) {
    this.storedPosts = [...this.storedPosts, post];
  }
}
