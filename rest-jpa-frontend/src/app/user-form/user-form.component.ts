import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserFormDataService } from '../form-data/user-form-data.service';
import { User } from './user';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
  
  user:User=new User();
  users:User[]=[];
 
  constructor(private router:Router,private userFormDataService:UserFormDataService){}

 saveEmployee():any{
  this.userFormDataService.createUser(this.user).subscribe({
    next:(data)=>{
      console.log(data);
      this.userFormDataService.getAllUsers().subscribe({
        next:(data:User[])=>{
          console.log("Loaded all users");
          this.users=data;}
      });
    },
    error:err=>{
      console.log(err);
    }
  })
 }
 
 onSubmit(){
  this.saveEmployee();
  this.router.navigate(['/']);
  }
}
