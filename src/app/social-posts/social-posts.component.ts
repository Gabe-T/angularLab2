import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {
  posts: Post[] = [
    {
      title: "Grand Circus",
      thought: "Grand Circus is cool.",
    },
    {
      title: "Ritual",
      thought: "Ritual is a well developed app.",
    },
    {
      title: "Scott",
      thought: "Scott rides scooters.",
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

  deletePost = (index: number): void =>{
    this.posts.splice(index, 1);
  };

  submitPost = (post: Post): void =>{
    this.posts.push(post);
  };

}
