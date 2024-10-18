import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user-form/user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserFormDataService {


  private baseUrl="http://localhost:8080/api";

  constructor(private httpClient: HttpClient) { 
    
  }

  createUser(user:User):Observable<any>{
    return this.httpClient.post(`${this.baseUrl}/adduser`,user);
  }
  getAllUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseUrl}/users`);
  }
  updateUser(user:User):Observable<any>{
    return this.httpClient.patch(`${this.baseUrl}/updateuser`,user);
  }
  deleteUser(id:number):Observable<any>{
    return this.httpClient.delete(`${this.baseUrl}/deleteuser/${id}`);
  }
}
