import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { }

  public loginForm = new FormGroup({
    username: new FormControl('admin', Validators.required),
    password: new FormControl('admin', Validators.required),
    environment: new FormControl('INT02', Validators.required),
  });

  ngOnInit() {
  }

  loginApp(){
this.router.navigate(['/tabs/tab1']);
  }

}
