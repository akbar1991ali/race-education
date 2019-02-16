import { LoginService } from './../_services/login.service';
import { Component, OnInit,HostListener } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  step = 0;

  constructor(private login:LoginService) { }



  ngOnInit() {
  }
  @HostListener('window:scroll', ['$event']) 
  doSomething(event) {
 
    if(window.pageYOffset >=80)
    {
      // console.log("Scroll Event", window.pageYOffset );
this.step=87;
    }else
    {
      this.step=0;
    }
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
