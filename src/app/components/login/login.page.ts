import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LoginState } from 'src/app/store/app-state';
import * as actions from 'src/app/store/app.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private router: Router,
    private loginStore: Store<LoginState>,
  ) {}

  public loginForm = new FormGroup({
    username: new FormControl('admin', Validators.required),
    password: new FormControl('admin', Validators.required),
    environment: new FormControl('INT02', Validators.required),
  });

  ngOnInit() {
  }

  loginApp(){
    const body = this.loginForm.value;
    if(body.username !== '' && body.password !== '' && body.environment !== ''){
      this.loginStore.dispatch(actions.LOGIN_REQUEST({ 
        username: body.username, 
        password: body.password, 
        environment: body.environment
      }));
    }
// this.router.navigate(['/tabs/tab1']);
  }

}
