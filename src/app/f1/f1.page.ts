import { Component, OnInit } from '@angular/core';
import { UkraineService } from '../Services/ukraine.service';

@Component({
  selector: 'app-f1',
  templateUrl: './f1.page.html',
  styleUrls: ['./f1.page.scss'],
})
export class F1Page implements OnInit {

  //varibles
  F1Data:any=[];

  constructor(private f1News:UkraineService) { }

  ngOnInit() {
    this.f1News.GetF1Data().subscribe(
      (data)=>{
        this.F1Data=data.results;
        console.log(this.F1Data);
      }
    )
  }

}
