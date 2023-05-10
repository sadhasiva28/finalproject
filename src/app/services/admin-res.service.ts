import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminResService {

  options:any;
  admin:any;

  constructor(private http:HttpClient) { }

  getforum():Observable<any>{
    return this.http.get("http://localhost:4500/suggestions")
  }
  getforumById(id:number):Observable<any>{
    return this.http.get("http://localhost:4500/suggestions/"+id)
}
public postadminres(obj: any): Observable<any> {
  const response = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  return this.http.put("http://localhost:4500/suggestions/" + obj.id, obj, { headers: response });
}

}
