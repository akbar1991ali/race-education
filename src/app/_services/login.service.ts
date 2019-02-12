import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }


  login(username:string,password:string)
  {
    return this.http.post<any>("/api/login.php",{email:username,password:password,fcm:"df",deviceid:"sdsd",route:1})
    .pipe(map(user=>
      {
        return user;
       
      }
      ))
  }

  test()
  {
    return this.http.get<any>("photos")
    .pipe(map(data=>
      {
        return data;
      }
      ))
  }

}
