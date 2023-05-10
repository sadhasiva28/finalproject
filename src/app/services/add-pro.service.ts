import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddProService {
  response:any;
  addproducts(formData: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }

  getproducts():Observable<any>{
    return this.http.get("http://localhost:4500/products")
  }
  public postproducts(obj: any): Observable<any> {
     this.response = new HttpHeaders({
      'Content-Type': 'application.json'
    });
    return this.http.post("http://localhost:4500/products/" ,obj, this.response);
  }
}
