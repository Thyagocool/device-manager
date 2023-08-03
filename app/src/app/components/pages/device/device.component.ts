import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { Device } from 'src/app/interfaces/device';
import { DeviceService } from 'src/app/services/device.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent {
  constructor(private service: DeviceService) {
    this.getDevices(null);
  }

  operatorType: string = '';
  display: boolean = false;
  devices: Device[] = [];
  device: Device = {};
  titlePage: string = 'Cadastro de Dispositivos';

  ngOnInit() {}

  getDevices(event: any) {
    this.service
      .selectDevices()
      .pipe(
        tap({
          next: data => this.devices = data,
          error: err => console.error(err),
        })
      )
      .subscribe();
  }

  openDialogEdit(device: any) {
    this.devices = device;
    this.display = !this.display;
    this.operatorType = 'edit';
    this.getDevices(null);
  }

  openDialogNew() {
    this.display = !this.display;
    this.operatorType = 'new';
    this.getDevices(null);
  }

  deleteDevice(device: Device){
    const id: any = device.id;
    this.service.deleteDevice(id).pipe(
      tap({
        next: res => {
          this.getDevices(null);
        },
        error: erro => console.error(erro)
      })
    ).subscribe()
  }
}
