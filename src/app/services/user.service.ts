import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  // selectedUser : User;
  // users : User[];
  constructor(private http: HttpClient) { }

  create(body:any): Observable<any>{
    return this.http.post('http://localhost:3000/singup', body);
  }
  login(body:any): Observable<any>{
    return this.http.post('http://localhost:3000/singin', body);
  }
  reset(body:any): Observable<any>{
    return this.http.post('http://localhost:3000/reset', body);
  }
  getUserList() {
    return this.http.get('http://localhost:3000/users');
  }

  changePass(body:any) {
    return this.http.patch('http://localhost:3000/:token/:userId' ,body);
  }

  deleteUser(_id: string) {
    return this.http.delete('http://localhost:3000/users' + `/${_id}`);
  }

}
