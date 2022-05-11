import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-best-tech',
  templateUrl: './best-tech.page.html',
  styleUrls: ['./best-tech.page.scss'],
})
export class BestTechPage implements OnInit {

  //Array of best Iphones
  iphones : string[]= ["Iphone 8 Plus","Iphone XS","Iphone 7","Iphone 11","Iphone XR"]
  constructor() { }

  ngOnInit() {
  }

}
