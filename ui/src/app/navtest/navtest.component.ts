import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navtest',
  templateUrl: './navtest.component.html',
  styleUrls: ['./navtest.component.css']
})
export class NavtestComponent implements OnInit {

  active = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
