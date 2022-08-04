import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MydataService } from '../mydata.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  users:any;
  constructor(private mydata:MydataService) { }

  ngOnInit(): void {
    this.getData();
  }
 getData(){
  const data=localStorage.getItem('key');
   this.users=JSON.parse(data);
   console.log(this.users.data);
 }

}
