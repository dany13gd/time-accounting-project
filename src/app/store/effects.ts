import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import * as StoreActions from '../store/app.actions';
import { UtilsService } from 'src/app/core/utils.service';
import { LoginService } from 'src/app/core/login.service';
import { Router } from '@angular/router';
import { UserState } from './app-state';
import { Store } from '@ngrx/store';


@Injectable()
export class Effects {

    login$ = createEffect(() => this.actions$.pipe(
        ofType(StoreActions.LOGIN_REQUEST),
        mergeMap(({ username, password, environment }) => {
          return this.loginSevice.getToken(username, password, environment).pipe(
            map((token) => {

              // this.userStore.dispatch(StoreActions.USER_REQUEST());
              this.router.navigate(['/tabs/tab1']);
              console.log(token);
              
              return StoreActions.LOGIN_SUCCESS({ token: token.access_token, refresh_token: token.refresh_token, expires_in: token.expires_in, token_type: token.token_type});
            }),
            catchError(error => {
              return of(StoreActions.LOGIN_FAILURE({ error }));
            })
          );
        })
      ));

getAccounting$ = createEffect(() =>
    this.actions$.pipe(ofType(StoreActions.TIMEACCOUNTING_REQUEST),
    mergeMap(() => {
        return this.utils.getTimeAccounting().pipe(
            map((data) => {
              console.log(data);
                return StoreActions.TIMEACCOUNTING_SUCCESS({Accounting: [{
                  duration: data.duration,
                  startTime: data.startTime,
                  endTime: data.endTime,
                  group: {
                      text: data.group.text,
                  },
                  type: {
                      text: data.type.type,
                  },
              }]})}), 
        catchError((error) => 
            of(StoreActions.TIMEACCOUNTING_FAILURE({error}))));
    })));

getUser$ = createEffect(() =>
    this.actions$.pipe(ofType(StoreActions.USER_REQUEST),
    mergeMap((data) => {
        return this.utils.getUserDetails().pipe(
          map((data) => {
            // debugger
           return StoreActions.USER_SUCCESS({user: {
            firstname: data.firstname,
            lastName: data.lastName,
            email: data.email,
            role: data.role,
            serviceProviderCode: data.serviceProviderCode,
            id: data.id,
            phone: data.phone,
        }})}), 
        catchError((error) => 
            of(StoreActions.USER_FAILURE({error}))));
    })));    

    constructor(private actions$: Actions, private utils: UtilsService, private loginSevice: LoginService, private router: Router, private userStore: Store<UserState>,) {}
}


