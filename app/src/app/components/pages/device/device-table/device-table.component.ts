import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Device } from 'src/app/interfaces/device';

@Component({
  selector: 'app-device-table',
  templateUrl: './device-table.component.html',
  styleUrls: ['./device-table.component.scss']
})
export class DeviceTableComponent {
  @Input() device:Device[] = []
  @Output() showFormNew = new EventEmitter;
  @Output() showFormEdit = new EventEmitter;
  @Output() removeDevice = new EventEmitter;

  openModalNew(){
    this.showFormNew.emit();

  }

  openModalEdit(device:Device){
    this.showFormEdit.emit(device);
  }

  deleteDevice(device:Device) {
    if(confirm("Are you sure to delete " + device.id)) {
      this.removeDevice.emit(device)
    }
  }
}
