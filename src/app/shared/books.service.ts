import { Injectable } from '@angular/core';
import { Books } from '../models/books';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from './usuario.service';
import { Login } from '../models/login';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class BooksService {


  public books :Books[]


  private url:string = 'http://localhost:3000/libros'
  private url2:string = 'http://localhost:3000/librosid'
  private urlLib:string = "http://localhost:3000/libros1"
  private urlLib2:string = "http://localhost:3000/libros1id"

  constructor( private http: HttpClient,private userService:UsuarioService) {
    this.books = [
      // new Books("como engañar a un ladron","Tapa blanda","German Artegoitia",20,"https://oxigenoalavida.files.wordpress.com/2013/11/si-vienes-a-robar-mi-vecino-es-rico.jpg",1),
      // new Books("El gato que le gusta el agua","Tapa blanda","Alvaro caravaca",15,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgrf5XzrTECvT17TS1XgRLLDo7qDAO2UTO5A&usqp=CAU",2),
      // new Books("El ciego casimiro","Tapa blanda","Casimiro gonzalez ",35,"https://s3.ppllstatics.com/diariovasco/www/pre2017/multimedia/noticias/201603/19/media/broma-youtuber--575x323.jpg",3),
      // new Books("Playa sin arena","Tapa blanda","Gonzalo perez",19.99,"https://www.lavanguardia.com/files/image_449_220/uploads/2021/12/30/61cd8c72af32c.jpeg",4),
  
    ]
   }

  getLibros()
   {
    console.log('esta debajo');
    
    console.log(this.userService.userLogeuado);
    
    return this.http.get(`${this.urlLib}?id=${this.userService.userLogeuado.user_id}` )
   }

  getUnLibro(id_libro:number)
   {
    return this.http.get(`${this.urlLib2}?id=${id_libro}&id_user=${this.userService.userLogeuado.user_id}`)
   }


  // getAll()
  // {
  //   console.log('entro al servicio getAll');
    
  //     return this.http.get(this.url)
  // }

  getOne(id:number)
  {
    console.log('entro al servicio getOne');
    console.log(id);
    
    
    return this.http.get( `${this.url2}?id=${id}` )
   
  }

  add(book:Books){
   return this.http.post(this.urlLib,book)
  }

  edit(book:Books)
  {
    return this.http.put(this.urlLib,book)
  }

  delete(id_book:number){
   return this.http.request('delete' , this.urlLib, { body: { id :id_book}})
  }

  eliminar(num:number){

     this.books = this.books.filter(val => val.id_book != num)
  }
}
