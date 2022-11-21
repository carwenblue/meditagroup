import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";

import { RouterModule } from '@angular/router';

import { PagesModule } from './pages/pages.module';
import { ShareModule } from './share/share.module';
import { MaterialModule } from './material/material.module';



@NgModule({
  declarations: [
    AppComponent,
  
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    MaterialModule,
    ShareModule,
    PagesModule,
  

    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
