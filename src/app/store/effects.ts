import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import * as StoreActions from '../store/app.actions';
import { UtilsService } from 'src/app/core/utils.service';
import { LoginService } from 'src/app/core/login.service';

@Injectable()
export class Effects {

    login$ = createEffect(() => this.actions$.pipe(
        ofType(StoreActions.LOGIN_REQUEST),
        mergeMap(({ username, password, environment }) => {
          return this.loginSevice.getToken(username, password, environment).pipe(
            map((token) => {
              return StoreActions.LOGIN_SUCCESS({ token: token.access_token  });
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
                return StoreActions.TIMEACCOUNTING_SUCCESS({data: data.result})}), 
        catchError((error) => 
            of(StoreActions.TIMEACCOUNTING_FAILURE({error}))));
    })));

getUser$ = createEffect(() =>
    this.actions$.pipe(ofType(StoreActions.USER_REQUEST),
    mergeMap((data) => {
        return this.utils.getUserDetails().pipe(
          map((data) => {
           return StoreActions.USER_SUCCESS({data: data.result})}), 
        catchError((error) => 
            of(StoreActions.USER_FAILURE({error}))));
    })));    

    constructor(private actions$: Actions, private utils: UtilsService, private loginSevice: LoginService) {}
}


