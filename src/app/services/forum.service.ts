import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForumService {
  options:any;
  foru:any;

  constructor(private http:HttpClient) { }

  getforum():Observable<any>{
    return this.http.get("http://localhost:4500/forum")
  }
  getforumById(id:number):Observable<any>{
    return this.http.get("http://localhost:4500/forum/"+id)
}
public postforum(obj : any):Observable<any>{

  this.options=new HttpHeaders({
    'Content-Type':'application/json',
  })
  return this.http.post("http://localhost:4500/forum",obj,this.options);
}
public postforumget(obj: any): Observable<any> {
  const response = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  return this.http.put("http://localhost:4500/forum/" + obj.id, obj, { headers: response });
}


}
