import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { selectorToken } from '../store/selectors';
import { LoginState } from '../store/app-state';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private token = '';
  constructor(private loginStore: Store<LoginState>) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  this.loginStore.pipe(select(selectorToken)).subscribe((token) => 
    this.token = token.token
  );
    if (this.token) {
      req = req.clone({
        headers: req.headers.set('Authorization', this.token)
      });
    }
    return next.handle(req);
  }
}
