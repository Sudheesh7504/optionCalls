import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpEventType } from '@angular/common/http';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent {

  responseData: any;

  // constructor(private httpService: HttpService) { }

  getDataWithCustomHeaders() {
    this.httpService.getWithCustomHeaders().subscribe((data) => {
      this.responseData = data;
    });
  }

  queryParamsForm: FormGroup;
  // responseData: any;

  constructor(private httpService: HttpService, private formBuilder: FormBuilder) {
    this.queryParamsForm = this.formBuilder.group({
      param1: '',
      param2: '',
    });
  }

  getDataWithQueryParams() {
    const queryParameters = this.queryParamsForm.value;
    this.httpService.getDataWithQueryParams(queryParameters).subscribe((data) => {
      this.responseData = data;
      console.log(data)
    });
  }

  // responseData: any;
  responseType: string = 'json';

  // constructor(private httpService: HttpService) { }

  getJsonResponse(responseType: 'json' | 'text' | 'arraybuffer' | 'blob') {
    this.responseType = responseType;
    this.httpService.getJsonData(responseType).subscribe((data) => {
      this.responseData = data;
    });
  }

  getTextResponse(responseType: 'json' | 'text' | 'arraybuffer' | 'blob') {
    this.responseType = responseType;
    this.httpService.getTextData(responseType).subscribe((data) => {
      this.responseData = data;
    });
  }

  getArrayBufferResponse(responseType: 'json' | 'text' | 'arraybuffer' | 'blob') {
    this.responseType = responseType;
    this.httpService.getArrayBufferData(responseType).subscribe((data) => {
      this.responseData = data;
    });
  }

  getBlobResponse(responseType: 'json' | 'text' | 'arraybuffer' | 'blob') {
    this.responseType = responseType;
    this.httpService.getBlobData(responseType).subscribe((data) => {
      this.responseData = data;
    });
  }


  progress: number = 0;
  // responseData: any;

  // constructor(private httpService: HttpService) { }

  getDataWithProgress() {
    this.progress = 0; // Reset progress
    this.httpService.getDataWithProgress()
      .pipe(delay(5000)) // Introduce a 2-second delay for testing
      .subscribe((event) => {
        if (event.type === HttpEventType.DownloadProgress) {
          // Handle download progress event
          this.progress = Math.round((event.loaded / event.total) * 100);
        } else if (event.type === HttpEventType.Response) {
          // Handle response event
          this.responseData = event.body;
        }
      });
  }


  // responseData: any;

  // constructor(private HttpService: HttpService) { }

  // ngOnInit() {
  //   this.getProducts();
  // }

  // getProducts() {
  //   this.HttpService.getProducts().subscribe((data) => {
  //     this.responseData = data;
  //   });
  // }

  // constructor(private httpService: HttpService) { }

  createUser() {
    const user = {
      name: 'John',
      email: 'john@example.com'
    };

    this.httpService.createNewUser(user).subscribe(response => {
      console.log('User created:', response);
      // Handle the response here
    });
  }

}