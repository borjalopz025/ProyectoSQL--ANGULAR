import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  private url:string = "http://localhost:3000/user"

  private url2:string =" http://localhost:3000/user2"

  public logueado:boolean

  public userLogeuado:User

  constructor(private http: HttpClient)
  {
    this.logueado = false
  }



  register(user:User)
  {
    console.log('entro a register');
    
    return this.http.post(this.url,user)
  }

  login(user:Login)
  {
    console.log('entro en login');
    
    return this.http.post(this.url2,user)
  }
  
}
