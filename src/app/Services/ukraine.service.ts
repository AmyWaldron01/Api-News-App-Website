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
    return this.httpClient.get('https://newsdata.io/api/1/news?apikey=pub_7283dde1f44cbddcd4ff494794f8f38ef04b&q=russia%20war&language=en')
  }

  //Get wii Data
  GetWiiData():Observable<any>{
    return this.httpClient.get('https://newsdata.io/api/1/news?apikey=pub_7283dde1f44cbddcd4ff494794f8f38ef04b&q=nintendo%20switch%20sport&language=en')
  }

  //Get F1 Data
  GetF1Data():Observable<any>{
    return this.httpClient.get('https://newsdata.io/api/1/news?apikey=pub_7283dde1f44cbddcd4ff494794f8f38ef04b&q=F1&language=en')
  }

  //Get all Tech Data 
  GetTechData():Observable<any>{
    return this.httpClient.get('https://newsdata.io/api/1/news?apikey=pub_7283dde1f44cbddcd4ff494794f8f38ef04b&q=new%20tech&language=en')
  }
}
