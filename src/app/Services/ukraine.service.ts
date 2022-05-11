import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UkraineService {

  //have to add it as an argument 
  constructor(private httpClient:HttpClient) { }

  //Should have called it news for better understanding in servies
  //this gets all data about ukraine on web
  GetUkrineData():Observable<any>{
    return this.httpClient.get('https://newsdata.io/api/1/news?apikey=pub_72758cab58efdf6b35f65a8aba36ca41cd9f&q=ukraine%20news')
  }

}
