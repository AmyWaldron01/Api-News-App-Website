import { Component } from '@angular/core';

//For displaying mood
import{Storage} from '@ionic/storage-angular'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 //varible
  myStatus:string="";

  constructor(private storage:Storage) {
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

}
