export interface AccountingState{
  isLoading: boolean;
  Accounting: [{
    duration:string,
    startTime: string,
    endTime: string,
    group:{
      text:string
    }
    type:{
      text:string
    }
  }];
  error: string | null;
}

export interface UserState{
  isLoading: boolean;
  user: {
    firstname: string, 
    lastName: string, 
    email: string, 
    role: string, 
    serviceProviderCode: string, 
    id:string, 
    phone: string};
  error: string | null;
}

export interface LoginState{
  isLoading: boolean;
  token: {access_token: string, refresh_token: string, expires_in: number, token_type: string};
  error: string | null;
}
