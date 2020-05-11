import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  clickCounter: number = 0;
  name: string
  title = 'Mazharul Sabbir';
  about_me = "ABOUT ME"
  who_am_i = "WHO AM I"
  about_body = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam laudantium quisquam voluptates eveniet? Placeat vero veritatis deleniti nemo delectus doloribus illum cum beatae recusandae, nihil velit vitae adipisci optio aliquam?" +
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam laudantium quisquam voluptates eveniet? Placeat vero veritatis deleniti nemo delectus doloribus illum cum beatae recusandae, nihil velit vitae adipisci optio aliquam?" +
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam laudantium quisquam voluptates eveniet? Placeat vero veritatis deleniti nemo delectus doloribus illum cum beatae recusandae, nihil velit vitae adipisci optio aliquam?"

  projects = [
    {
      name: "Rannaghor",
      desc: "Make your food delicious",
      img: "assets/project/rannaghor.png"
    },
    {
      name: "Rannaghor",
      desc: "Make your food delicious",
      img: "assets/project/rannaghor.png"
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  countClick() {
    this.clickCounter += 1;
  }

  setClass() {
    let myClass = {
      active: this.clickCounter > 4,
      nonActive: this.clickCounter <= 4
    }

    return myClass;
  }
}
