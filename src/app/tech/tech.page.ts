import { Component, OnInit } from '@angular/core';
//This is for using the method for best iphones
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.page.html',
  styleUrls: ['./tech.page.scss'],
})
export class TechPage implements OnInit {

  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }

  //The method used to open best iphones
  openBestTechPage(){
    //changes the url
    this.navCtrl.navigateForward('/best-tech');
  }

}
