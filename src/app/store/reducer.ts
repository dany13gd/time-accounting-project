import { createReducer, on } from '@ngrx/store';
import { AccountingState, LoginState, UserState } from 'src/app/store/app-state';
import * as actions from './app.actions';

// Definir la interfaz del estado
export  const loginState: LoginState = {
    isLoading: false,
    token: {token: ''},
    error: ''
}

export  const accountingState: AccountingState = {
    isLoading: false,
    Accounting: {},
    error: ''
}


export  const userState: UserState = {
    isLoading: false,
    user: {},
    error: ''
}



export const loginReducer = createReducer(loginState,
     on(actions.LOGIN_REQUEST, (state, action) => ({
        ...state,
         isLoading: true,
         username: action.username,
         pass: action.password,
         env: action.environment
        })),
    on(actions.LOGIN_SUCCESS, (state, action ) => ({
        ...state,
         isLoading: false, 
         token: action.token
        })),
    on(actions.LOGIN_FAILURE, (state, action) => ({
        ...state,
         isLoading: false, 
         error: 
         action.error
        })));
  


export const AccountingReducer = createReducer(accountingState,
    on(actions.TIMEACCOUNTING_REQUEST, (state, action) => ({
        ...state,
        isLoading: true,
        data: action
        })),
    on(actions.TIMEACCOUNTING_SUCCESS, (state, action ) => ({
        ...state,
        isLoading: false, 
        data: action.data,
        })),
    on(actions.TIMEACCOUNTING_FAILURE, (state, action) => ({
        ...state,
        isLoading: false, 
        error: 
        action.error
        })));

export const UserReducer = createReducer(userState,
    on(actions.USER_REQUEST, (state) => ({
        ...state,
        isLoading: true,
        })),
    on(actions.USER_SUCCESS, (state, action ) => ({
        ...state,
        isLoading: false, 
        data: action.data,
        })),
    on(actions.USER_FAILURE, (state, action) => ({
        ...state,
        isLoading: false, 
        error: 
        action.error
        })));
