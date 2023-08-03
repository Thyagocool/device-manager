import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PrimeNgModule } from '../modules/prime-ng.module';
import { MessageErrorComponent } from './commons/message-error/message-error.component';
import { TopBarComponent } from './commons/top-bar/top-bar.component';
import { RegisterRoutingModule } from './components-routing.module';
import { CategoryFormComponent } from './pages/category/category-form/category-form.component';
import { CategoryTableComponent } from './pages/category/category-table/category-table.component';
import { CategoryComponent } from './pages/category/category.component';
import { DeviceFormComponent } from './pages/device/device-form/device-form.component';
import { DeviceTableComponent } from './pages/device/device-table/device-table.component';
import { DeviceComponent } from './pages/device/device.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [MessageErrorComponent, HomeComponent, CategoryComponent, CategoryTableComponent, CategoryFormComponent,
    TopBarComponent, DeviceComponent, DeviceFormComponent, DeviceTableComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, PrimeNgModule, RegisterRoutingModule],
  exports: [MessageErrorComponent],
})
export class ComponentsModule {}
