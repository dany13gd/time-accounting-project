import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import credentials from '../../../credentials';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  public getToken(username: any, password: any, env: any) {
    const url = environment.apiUrl + '/oauth2/token';
    const payload = `client_id=${credentials.clientId}&client_secret=${credentials.clientSecret}&scope=${credentials.scope}&grant_type=${credentials.grantType}&agency_name=${credentials.agencyName}&username=${username}&password=${password}&environment=${env}`
    return this.http.post<any>(url, payload);
  }
}
