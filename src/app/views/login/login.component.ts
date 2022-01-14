import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ToasterService } from 'angular2-toaster';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private toasterService: ToasterService,private userService: UserService,private route :Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      password: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }
  login(){
    this.userService.login(this.form.value).subscribe(
      res => {
      this.toasterService.pop('success', 'Success Login', res.message);
        console.log(res);
        alert(res.message)
        if (res.message==="authetification successful") {
          location.href="http://localhost:4200/#/dashboard#";
          localStorage.setItem('token', res.token);
           localStorage.setItem('user',res._id);
        }
        // else{
        //   alert(res.message)
        // }
        
      }, error => {
        this.toasterService.pop('error', 'Error');
        console.log(error);
        alert(error.message)
        location.reload()
      }
    );
    
  }

}
