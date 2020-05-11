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
  about_body = "Hello! Myself Md Mazharul Islam and my nickname is Sabbir. I am a software engineer since 2018. And currently " +
    "I am a Student of Daffodil International University. (2017-2021). I am taking bachelor degree of Computer Science and Engineering"+
    ""
  projects = [
    {
      name: "Rannaghor",
      desc: "Make your food delicious",
      img: "assets/project/rannaghor.png"
    },
    // {
    //   name: "AlterPay",
    //   desc: "Buy & Sell Doller",
    //   img: "assets/project/rannaghor.png"
    // },
    {
      name: "SnugVPN",
      desc: "VPN Service",
      img: "assets/project/snug_vpn.jpg"
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
