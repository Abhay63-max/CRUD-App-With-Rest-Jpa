import { Component } from '@angular/core';
import { User } from '../user-form/user';
import { UserFormDataService } from '../form-data/user-form-data.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { DeleteUserComponent } from '../delete-user/delete-user.component';
import { UpdateUserComponent } from '../update-user/update-user.component';
import { UserFormComponent } from '../user-form/user-form.component';

declare var $ :any;
@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule,RouterModule,DeleteUserComponent,UpdateUserComponent,UserFormComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {

   users:User[]=[];
   user:User={
    id:0,
    name:'',
    email:'',
    password:''
   }

   constructor(private userFormDataService:UserFormDataService,private router:Router){}

  ngOnInit():void{
    this.listAllUsers();
  }

  listAllUsers():void{
   this.userFormDataService.getAllUsers().subscribe({
    next:(data:User[]) =>this.users=data,
    error:err=>{
    console.error('Error fetching users',err);
  }});
   }
   showEditModal(user:User):void{
    this.user=user;
    $('#updateModal').modal('show');
   }
   showDeleteModal(user:User):void{
    this.user=user;
    $('#deleteModal').modal('show');
   }
   onUserAdded():void{
    console.log("Button clicked");
    this.listAllUsers();
   }
   onUserDeleted():void{
    this.listAllUsers();
   }
}
