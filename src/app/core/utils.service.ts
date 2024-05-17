import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private http: HttpClient,public alertController: AlertController,) { }

  getTimeAccounting(): Observable<any> {
    const url = `${environment.apiInspectionsUrl}/v4/inspections/32093/timeAccounting`;
    return this.http.get<any>(url);
  }

  getUserDetails(): Observable<any> {
    const url = `${environment.apiInspectionsUrl}/v4/users/me`;
    return this.http.get<any>(url);
  }

  updateTimeAccountingTime(body: any): Observable<any> {
    const url = `${environment.apiInspectionsUrl}/v4/inspections/32093/timeAccounting/${body.id}`;
    return this.http.put<any>(url, { body });
  }

  deleteTimeAccounting(id: number): Observable<any> {
    const url = `${environment.apiInspectionsUrl}/v4/inspections/32093/timeAccounting/${id}`;
    return this.http.delete<any>(url);
  }


  async onError(error: any) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: error.error.error_description,
      buttons: ['OK'],
    });

    await alert.present();
  }
}