import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MydataService {

  constructor(private http:HttpClient) { }

postdata(data){
    return this.http.post('https://admin.eniola.app/api/v1/login',data);
}
}
