import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsanaService {

  constructor(private http:HttpClient) { }

  public createTask(asana:any){
    return this.http.post(`${'http://localhost:8080'}/asana/create_task`,asana);
  }

  public getAllAsanas(){
    return this.http.get(`${'http://localhost:8080'}/asana/`); 
  }
}
