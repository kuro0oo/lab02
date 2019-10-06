import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DanhmucComponent } from './danhmuc/danhmuc.component';
import { from } from 'rxjs';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { LienheComponent } from './lienhe/lienhe.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DanhmucComponent,
    DangnhapComponent,
    LienheComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([ 
      { path: '', 	component: HomeComponent }, 
      {path: 'home', component:HomeComponent},
      {path: 'danhmuc', component:DanhmucComponent},
      {path: 'dangnhap', component:DangnhapComponent},
      {path: 'lienhe', component:LienheComponent},
      { path: '**', redirectTo: 'home', pathMatch: 'full' },
    
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
