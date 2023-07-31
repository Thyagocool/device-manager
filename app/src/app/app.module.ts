import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './components/category/category.component';
import { MainComponent } from './components/main/main.component';
import { PrimengModule } from './modules/primeng/primeng.module';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimengModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
