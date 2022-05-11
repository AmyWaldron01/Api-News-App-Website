import { Component, OnInit } from '@angular/core';
//importing it from the service class
import {UkraineService} from '../Services/ukraine.service';

@Component({
  selector: 'app-ukraine',
  templateUrl: './ukraine.page.html',
  styleUrls: ['./ukraine.page.scss'],
})
export class UkrainePage implements OnInit {

  //varible
  UkraineData:any =[];

  constructor(private ukraineNews:UkraineService ) { }
  
  ngOnInit() {
    this.ukraineNews.GetUkrineData().subscribe(
      (data)=>{
        this.UkraineData=data.Search;
        console.log(this.UkraineData);
      }
    );

  }

}
