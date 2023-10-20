import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscriber, last } from 'rxjs';
import { User } from 'src/app/models/user';
import { UsuarioService } from 'src/app/shared/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {
  [x: string]: any;

  public myForm:FormGroup;

    
  constructor( private formBuilder:FormBuilder, private userService:UsuarioService,private router: Router){
   this.buildForm()
  }
  
  public register2(name:string,last_name:string,email:string,photo:string, password:string,password2:string): void
  {
    console.log(this.myForm.value);
    
    
    this.userService.register(new User(0,name,last_name,email,photo,password)).subscribe((data:any) =>{
      console.log(data);
      
      this.router.navigateByUrl("/login")
    })
    
  }
  
  private buildForm(){
    const minPssLength = 0;

    this.myForm = this.formBuilder.group({
      nombre:[,[Validators.required]],
      apellido:[,[Validators.required]],
      email:[,[Validators.required, Validators.email]],
      url:[,[Validators.required]],
      password:[,[Validators.required,Validators.minLength(minPssLength)]],
      password2:[,[Validators.required, this.checkPaasword ]]
    })
  }

  public checkPaasword(control:AbstractControl){

      let resultado ={matchPassword: true};

      if(control.parent?.value.password == control.value)
      resultado= null
      return resultado
  }

  
  
}


