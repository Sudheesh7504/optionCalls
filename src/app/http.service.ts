

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.model';
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  // getDataWithQueryParams(queryParameters: any) {
  //   throw new Error('Method not implemented.');
  // }


  // getDataWithProgress(): Observable<any> {
  //   return this.http.get(`${this.apiUrl}`, {
  //     observe: 'events', // Observe events
  //     reportProgress: true, // Report progress
  //   });
  // }
  // getProducts(): Observable<Product[]> {
  //   const apiUrl = 'https://fakestoreapi.com/products';
  //   let Token = "jshjshxs88w28";
  //   // Define custom headers (if needed)
  //   const headers = new HttpHeaders()
  //     .set('Authorization', `Bearer ${Token}`)
  //     .set('Custom-Header', 'Sudeesh');
  //   return this.http.get<Product[]>(apiUrl, { headers: headers });
  // }
  // getData(responseType: string) {
  //   throw new Error('Method not implemented.');
  // }
  // getDataWithProgress() {
  //   throw new Error('Method not implemented.');
  // }
  private apiUrl = 'https://fakestoreapi.com/products'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getWithCustomHeaders(): Observable<any> {
    // Define custom headers
    const headers = new HttpHeaders({
      'Authorization': 'Bearer YourAuthToken', // Add your authorization token
      'Custom-Header': 'YourCustomValue', // Add custom headers as needed
    });

    // Make an HTTP GET request with custom headers
    return this.http.get(`${this.apiUrl}`, { headers });
  }

  getDataWithQueryParams(queryParameters: any): Observable<any> {
    return this.http.get(`${this.apiUrl}`, {
      params: queryParameters,
    });
  }

  getJsonData(responseType: 'json' | 'text' | 'arraybuffer' | 'blob'): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'text/plain', // Simulate different content type headers
    });

    let options: any = { headers, responseType };

    return this.http.get(this.apiUrl, { ...options, responseType: 'json' });
  }

  getTextData(responseType: 'json' | 'text' | 'arraybuffer' | 'blob'): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'text/plain', // Simulate different content type headers
    });

    let options: any = { headers, responseType };

    return this.http.get(this.apiUrl, { ...options, responseType: 'text' });
  }

  getArrayBufferData(responseType: 'json' | 'text' | 'arraybuffer' | 'blob'): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'text/plain', // Simulate different content type headers
    });

    let options: any = { headers, responseType };

    return this.http.get(this.apiUrl, { ...options, responseType: 'arraybuffer' });
  }

  getBlobData(responseType: 'json' | 'text' | 'arraybuffer' | 'blob'): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'text/plain', // Simulate different content type headers
    });

    let options: any = { headers, responseType };

    return this.http.get(this.apiUrl, { ...options, responseType: 'blob' });
  }



  getDataWithProgress(): Observable<any> {
    return this.http.get(`${this.apiUrl}`, {
      observe: 'events', // Observe events
      reportProgress: true, // Report progress
    });
  }

  // getProducts(): Observable<Product[]> {
  //   const apiUrl = 'https://fakestoreapi.com/products';
  //   let Token = "jshjshxs88w28";

  //   // Define custom headers (if needed)
  //   const headers = new HttpHeaders()
  //     .set('Authorization', `Bearer ${Token}`)
  //     .set('Custom-Header', 'Sudeesh');

  //   return this.http.get<Product[]>(apiUrl, { headers: headers });
  // }

  createNewUser(user: any): Observable<any> {
    // Define custom headers if needed

    let Token = "sudu17w626w"
    let value = "shxbhsvxsv"
    const headers = new HttpHeaders()

      .set('Authorization', `Bearer ${Token}`)
      .set('Custom-Header', `${value}`);

    // Define the request body with the user data
    const httpOptions = {
      headers: headers,
      body: user
    };

    // Send a POST request to create a new user with custom content
    return this.http.post(this.apiUrl, user, httpOptions);
  }
}
