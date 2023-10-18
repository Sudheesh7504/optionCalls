// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { AppComponent } from './app.component';
import { HttpComponent } from './http/http.component';
import { HttpService } from './http.service';
import { ReactiveFormsModule } from '@angular/forms';
import { TextFormatPipe } from './text-format.pipe';
import { BinaryFormatPipe } from './binary-format.pipe';

@NgModule({
  declarations: [AppComponent, HttpComponent, TextFormatPipe, BinaryFormatPipe],
  providers: [HttpService],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule], // Add HttpClientModule to the imports array
  bootstrap: [AppComponent],
})
export class AppModule { }

export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

