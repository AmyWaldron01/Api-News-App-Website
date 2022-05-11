import { Component, OnInit } from '@angular/core';
import { UkraineService } from '../Services/ukraine.service';

@Component({
  selector: 'app-switch-sports',
  templateUrl: './switch-sports.page.html',
  styleUrls: ['./switch-sports.page.scss'],
})
export class SwitchSportsPage implements OnInit {

  //varible
  WiiData:any =[];
  
  constructor(private wiiNews:UkraineService) { }

  //making it so i can get wii data
  ngOnInit() {
    this.wiiNews.GetWiiData().subscribe(
      (data)=>{
        this.WiiData=data.results;
        console.log(this.WiiData);
      }
    );
  }

}
