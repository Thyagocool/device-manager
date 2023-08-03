import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from 'src/app/interfaces/category';

@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.scss']
})
export class CategoryTableComponent {
  @Input() category:Category[] = []
  @Output() showFormNew = new EventEmitter;
  @Output() showFormEdit = new EventEmitter;
  @Output() removecategory = new EventEmitter;

  openModalNew(){
    this.showFormNew.emit();

  }

  openModalEdit(category: Category){
    this.showFormEdit.emit(category);
  }

  deleteCategory(category: Category) {
    if(confirm("Are you sure to delete " + category.id)) {
      this.removecategory.emit(category)
    }
  }
}
