import { Component } from '@angular/core';
import { FormGroup, FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { User } from 'src/app/models/user';
import { UsuarioService } from 'src/app/shared/usuario.service';


@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {

    public myForm:FormGroup;

    
    constructor( private formBuilder:FormBuilder, private userService:UsuarioService,private router: Router){
     this.buildForm()
    }
    
    public iniciarSesion(email:string, password:string): void
    {
      console.log(this.myForm.value);
      this.userService.login(new Login( email,password)).subscribe((data:any) =>{
        console.log('esta debajo ');
        console.log(data);
        if(data.error){
        console.log('esto da error');
        console.log(data.mensaje);
      }
        else{
          
          
          this.userService.logueado= true
          this.userService.userLogeuado = data.data[0]
          this.router.navigateByUrl("/books")
        }
        
      })
      
      
    }
    
    private buildForm(){
      const minPssLength = 0;

      this.myForm = this.formBuilder.group({
        email:[,[Validators.required, Validators.email]],
        password:[,[Validators.required,Validators.minLength(minPssLength)]]
      })
    }
    
}
