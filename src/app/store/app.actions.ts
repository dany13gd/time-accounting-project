import { createAction, props } from '@ngrx/store';

// Definir las constantes de acción
export const LOGIN_REQUEST = createAction('[Auth] Login Request', props<{ username: string | null | undefined, password: string | null | undefined, environment: string | null | undefined }>());
export const LOGIN_SUCCESS = createAction('[Auth] Login Success',  props<{ token: string, refresh_token: string, expires_in: number, token_type: string }>());
export const LOGIN_FAILURE = createAction('[Auth] Login Failure', props<{ error: string }>());


export const USER_REQUEST = createAction('[User] User Request');
export const USER_SUCCESS = createAction('[User] User Success', props<{ user: {firstname: string, lastName: string, email: string, role: string, serviceProviderCode: string, id:string, phone: string}; }>());
export const USER_FAILURE = createAction('[User] User Failure', props<{ error: string }>());

export const TIMEACCOUNTING_REQUEST = createAction('[Accounting] Accounting Request');
export const TIMEACCOUNTING_SUCCESS = createAction('[Accounting] Accounting Success', props<{  Accounting: [{
    duration:string,
    startTime: string,
    endTime: string,
    group:{
      text:string
    }
    type:{
      text:string
    }
  }]; }>());
export const TIMEACCOUNTING_FAILURE = createAction('[Accounting] Accounting Failure', props<{ error: string }>());