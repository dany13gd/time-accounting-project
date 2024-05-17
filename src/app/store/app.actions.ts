import { createAction, props } from '@ngrx/store';

// Definir las constantes de acción
export const LOGIN_REQUEST = createAction('[Auth] Login Request', props<{ username: string | null | undefined, password: string | null | undefined, environment: string | null | undefined }>());
export const LOGIN_SUCCESS = createAction('[Auth] Login Success',  props<{ token: any }>());
export const LOGIN_FAILURE = createAction('[Auth] Login Failure', props<{ error: any }>());

export const TIMEACCOUNTING_REQUEST = createAction('[Accounting] Accounting Request');
export const TIMEACCOUNTING_SUCCESS = createAction('[Accounting] Accounting Success', props<{ data: any }>());
export const TIMEACCOUNTING_FAILURE = createAction('[Accounting] Accounting Failure', props<{ error: string }>());

export const USER_REQUEST = createAction('[User] User Request');
export const USER_SUCCESS = createAction('[User] User Success', props<{ data: any }>());
export const USER_FAILURE = createAction('[User] User Failure', props<{ error: string }>());
