import { Component, OnInit, signal } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { UserState } from 'src/app/store/app-state';
import { selectorUser } from 'src/app/store/selectors';
import * as actions from 'src/app/store/app.actions';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  public userDetails$: Observable<any> = of();
  public userDetails = signal<any>('');
  public timeList: any;
  public loading = signal(false);

  constructor(
    private userStore: Store<UserState>,
  ) {
    this.userStore.dispatch(actions.USER_REQUEST());
  }

  ngOnInit() {
   this.userDetails$ = this.userStore.pipe(select(selectorUser));
  }
}
