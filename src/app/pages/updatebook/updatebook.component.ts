import { identifierName } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Books } from 'src/app/models/books';
import { BooksService } from 'src/app/shared/books.service';
import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent {

  public books : Books[]

  constructor(private bookservice: BooksService, private router: Router,private userService:UsuarioService){
    this.books= this.bookservice.books
   
    
  }

  public add(titulo:string, tapa:string, autor: string, precio:number,photo:string,codigo:number){
   
    this.bookservice.edit(new Books(titulo,tapa,autor,precio,photo,codigo,this.userService.userLogeuado.user_id)).subscribe((data) =>{
      console.log(data);
      
    })
    
     this.router.navigateByUrl("/books")
  }
  

}
