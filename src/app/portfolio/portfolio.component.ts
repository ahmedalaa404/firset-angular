import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }
  baseUrl:string='./assets/image/';
  storeImage:string[]=['cabin.png','cake.png','circus.png','game.png','safe.png','submarine.png'];
  ngOnInit(): void {
  }

}
