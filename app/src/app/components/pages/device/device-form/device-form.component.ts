import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs';
import { Category } from 'src/app/interfaces/category';
import { DeviceService } from 'src/app/services/device.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-device-form',
  templateUrl: './device-form.component.html',
  styleUrls: ['./device-form.component.scss'],
})
export class DeviceFormComponent {
  @Output() onHideDialog = new EventEmitter();
  @Input() operatorType: string = '';
  @Input() device: any = [];

  categories: Category[] = []
  selectedCategory: string = '';

  deviceForm!: FormGroup;
  errorDescription: string = '';

  constructor(private formBuilder: FormBuilder, private service: DeviceService, private categoryService: CategoryService) {}

  ngOnInit() {
    this.deviceForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      post: ['', [Validators.required]],
      id_author: ['', Validators.required],
    });


    this.categoryService.selectCategories().pipe(
      tap({
        next: res => {
          this.categories = res
        },
        error: error => console.error(error)
      })
    ).subscribe()

  }

  saveDevice() {
    if (this.operatorType == 'new') {
      const device = this.deviceForm.getRawValue();
      if (!this.deviceForm.invalid) {
        this.service
          .insertDevice(device)
          .pipe(
            tap({
              next: (res) => {
                this.hideShowDialog();
              },
              error: (erro) => console.error(erro),
            })
          ).subscribe();
      }
    } else {
      const device = this.device;

      if (!this.deviceForm.invalid) {
        this.service
          .updateDevice(device.id, device)
          .pipe(
            tap({
              next: (res) => {
                this.hideShowDialog();
              },
              error: (erro) => console.error(erro),
            })
          )
          .subscribe();
      }
    }
    this.deviceForm.reset();
  }

  hideShowDialog() {
    this.onHideDialog.emit();
    this.deviceForm.reset();
  }
}
