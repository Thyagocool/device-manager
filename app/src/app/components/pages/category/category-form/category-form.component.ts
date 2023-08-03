import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs';
import { Category } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent {
  @Output() onHideDialog = new EventEmitter();
  @Input() operatorType:string = '';
  @Input() category: any = [];

  categoryForm!: FormGroup;
  errorDescription: string = '';

  constructor(private formBuilder: FormBuilder, private service: CategoryService){}

  ngOnInit(){
    this.categoryForm = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })

    if(this.operatorType=='edit'){
      this.categoryForm.controls['email'].setValue(this.category.email)
    }

  }

  saveCategory(){
    if(this.operatorType=='new'){
      const category = this.categoryForm.getRawValue();
      if(!this.categoryForm.invalid){
        this.service.insertCategory(category).pipe(
          tap({
            next: res => {
              this.hideShowDialog();
            },
            error: erro => console.error(erro)
          })
        ).subscribe()
      }
    }else{
      const category = this.category;
      if(!this.categoryForm.invalid){
        this.service.updateCategory(category.id, category).pipe(
          tap({
            next: res => {
              this.hideShowDialog();
            },
            error: erro => console.error(erro)
          })
        ).subscribe()
      }
    }
    this.categoryForm.reset();
  }

  hideShowDialog() {
    this.onHideDialog.emit();
    this.categoryForm.reset();

  }
}
