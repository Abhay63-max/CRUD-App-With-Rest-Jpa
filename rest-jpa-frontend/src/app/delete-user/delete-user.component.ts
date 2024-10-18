import { Component, Input, Output,EventEmitter } from '@angular/core';
import { UserFormDataService } from '../form-data/user-form-data.service';
import { User } from '../user-form/user';

declare var $:any;
@Component({
  selector: 'app-delete-user',
  standalone: true,
  imports: [],
  templateUrl: './delete-user.component.html',
  styleUrl: './delete-user.component.css'
})
export class DeleteUserComponent {

  @Input() user:User | null=null;
  @Output() userDeleted = new EventEmitter<void>();
  constructor(private userFormDataService:UserFormDataService){}

    deleteUser():any{
    if(this.user){
    this.userFormDataService.deleteUser(this.user.id).subscribe({
    next:(response)=>{
      $('.ui.modal').modal('hide');
      this.userDeleted.emit();
    },
    error:err=>{
    console.log("Error deleting function",err);
    }
  });
  } 
   else{
    console.log("Error fetching user");
  }
  }
}
