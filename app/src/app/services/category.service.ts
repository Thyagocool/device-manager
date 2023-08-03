import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroments';
import { Category } from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  token:any = localStorage.getItem("Token")

  httpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    }
  };

  API:string = `${environment.API}category`;

  constructor(private http: HttpClient) { }

  selectCategories():Observable<Category[]> {
    return this.http.get<Category[]>(this.API, this.httpOptions())
  }

  insertCategory(data: Category):Observable<Category[]>{
    return this.http.post<Category[]>(this.API, data, this.httpOptions())
  }

  updateCategory(id:number, data: Category):Observable<Category[]>{
    return this.http.put<Category[]>(`${this.API}/${id}`, data, this.httpOptions())
  }

  deleteCategory(id:number){
    return this.http.delete(`${this.API}/${id}`, this.httpOptions())
  }

}
