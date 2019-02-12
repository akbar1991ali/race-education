import { LoginService } from './../_services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private login:LoginService) { }

  ngOnInit() {
    this.testData();
    // this.userLogin();
  }

  userLogin() {
    
    this.login.login("akbar1991ali@yahoo.com", "123")
      .subscribe(
        data => {
          console.log(data);
        
        },
        error => {
        
           console.log(error);
        });
  }


  testData() {
    
    this.login.test()
      .subscribe(
        data => {
          console.log(data);
        
        },
        error => {
           console.log(error);
        });
  }

}
