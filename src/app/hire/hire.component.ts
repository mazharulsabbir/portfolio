import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hire',
  templateUrl: './hire.component.html',
  styleUrls: ['./hire.component.scss']
})
export class HireComponent implements OnInit {

  mobile:string = "+8801825632294"
  email:string="mazharul15-8950@diu.edu.bd"
  
  constructor() { }

  ngOnInit(): void {
  }

}
