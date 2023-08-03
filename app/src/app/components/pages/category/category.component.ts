import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { Category } from '../../../interfaces/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {
  constructor(private service: CategoryService) {
    this.getCategories(null);
  }

  operatorType: string = '';
  display: boolean = false;
  categories: Category[] = [];
  category: Category = {};
  titlePage: string = 'Cadastro de Usuários';

  ngOnInit() {}

  getCategories(event: any) {
    this.service
      .selectCategories()
      .pipe(
        tap({
          next: data => this.categories = data,
          error: err => console.error(err),
        })
      )
      .subscribe();
  }

  openDialogEdit(category: any) {
    this.category = category;
    this.display = !this.display;
    this.operatorType = 'edit';
    this.getCategories(null);
  }

  openDialogNew() {
    this.display = !this.display;
    this.operatorType = 'new';
    this.getCategories(null);
  }

  deleteCategory(category: Category){
    const id: any = category.id;
    this.service.deleteCategory(id).pipe(
      tap({
        next: res => {
          this.getCategories(null);
        },
        error: erro => console.error(erro)
      })
    ).subscribe()
  }
}
