import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroments';
import { Device } from '../interfaces/device';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  token:any = localStorage.getItem("Token")

  httpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    }
  };

  API:string = `${environment.API}device`;

  constructor(private http: HttpClient) { }

  selectDevices():Observable<Device[]> {
    return this.http.get<Device[]>(this.API, this.httpOptions())
  }

  insertDevice(data: Device):Observable<Device[]>{
    return this.http.Device<Device[]>(this.API, data, this.httpOptions())
  }

  updateDevice(id:number, data: Device):Observable<Device[]>{
    return this.http.put<Device[]>(`${this.API}/${id}`, data, this.httpOptions())
  }

  deleteDevice(id:number){
    return this.http.delete(`${this.API}/${id}`, this.httpOptions())
  }

}
