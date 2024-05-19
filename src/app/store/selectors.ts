import * as States from "src/app/store/app-state";

export const selectorToken = (state: States.LoginState) => state.token;
export const selectorAccounting = (state: States.AccountingState) => state.Accounting;
export const selectorUser = (state: States.UserState) => state.user;
