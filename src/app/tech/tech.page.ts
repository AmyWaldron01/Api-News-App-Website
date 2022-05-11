import { Component, OnInit } from '@angular/core';
//This is for using the method for best iphones
import {NavController} from '@ionic/angular';
import { UkraineService } from '../Services/ukraine.service';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.page.html',
  styleUrls: ['./tech.page.scss'],
})
export class TechPage implements OnInit {

  //varible
  TechData:any=[];

  constructor(private navCtrl:NavController, private techNews:UkraineService) { }

  ngOnInit() {
    this.techNews.GetTechData().subscribe(
      (data)=>{
        this.TechData=data.results;
        console.log(this.TechData);
      }
    )
  
  }

  //The method used to open best iphones
  openBestTechPage(){
    //changes the url
    this.navCtrl.navigateForward('/best-tech');
  }

}
