import { Component, OnInit } from '@angular/core';
//Importing storage
import{Storage} from '@ionic/storage-angular'

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
})
export class StatusPage implements OnInit {

  //varible
  myStatus:string = "";

  //Creating an instance
  constructor(private storage:Storage, private navCtrl:NavController) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    //retiriving the storage
    this.storage.create()
    .then(()=>{
      this.storage.get('status')
      .then((status)=>{
        this.myStatus=status;
      })
      .catch();
    })
    .catch();
  }

  SaveStatus(){

    //passing in value//saving to disk
    this.storage.create()
    .then(()=>{
      this.storage.set("status",this.myStatus)
      .then(()=>{
        console.log(this.myStatus)
        this.navCtrl.navigateBack('/home');
      })
      .catch();
    })
    .catch();
  }

}
