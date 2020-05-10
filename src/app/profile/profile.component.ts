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
