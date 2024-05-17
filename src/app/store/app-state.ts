export interface AccountingState{
  isLoading: boolean;
  Accounting: any;
  error: string | null;
}

export interface UserState{
  isLoading: boolean;
  user: any;
  error: string | null;
}

export interface LoginState{
  isLoading: boolean;
  token: {token: string};
  error: string | null;
}
