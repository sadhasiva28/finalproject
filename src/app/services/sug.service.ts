import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SugService {
  options:any;

  constructor(private http:HttpClient) { }

  getsuggestions():Observable<any>{
    return this.http.get("http://localhost:4500/suggestions")
  }
  getsuggestionsById(id:number):Observable<any>{
    return this.http.get("http://localhost:4500/suggestions/"+id)
}
public postforum(obj : any):Observable<any>{

  this.options=new HttpHeaders({
    'Content-Type':'application/json',
  })
  return this.http.post("http://localhost:4500/suggestions",obj,this.options);
}
public postforumget(obj: any): Observable<any> {
  const response = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  return this.http.put("http://localhost:4500/suggestions/" + obj.id, obj, { headers: response });
}
}
