import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MydataService } from '../mydata.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  userdata:any;
  msg:any;
  newForm:FormGroup
  constructor(private mydata:MydataService,private route:Router) { }

  ngOnInit(): void {
    this.newForm=new FormGroup({
      'email':new FormControl(''),
      'password':new FormControl('')
    })
  }

  formSubmit(){
    this.mydata.postdata(this.newForm.value).subscribe(data=>{
      this.userdata=data;
     
      if(this.userdata.status==200){
        localStorage.setItem("key",JSON.stringify(data));
        this.route.navigate(['home']);
      }
      else{
        this.msg= this.userdata.message;
      }
    })
   }
}
