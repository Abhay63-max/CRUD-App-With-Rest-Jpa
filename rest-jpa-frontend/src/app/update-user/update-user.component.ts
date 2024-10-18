import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../user-form/user';
import { UserFormDataService } from '../form-data/user-form-data.service';

declare var $:any;
@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent {
  @Input() user :User={
    id:0,
    name:'',
    email:'',
    password:''
  }
  
  constructor(private userFormDataService:UserFormDataService){}

  updateUser(user:User):void{
    this.userFormDataService.updateUser(user).subscribe({
      next:()=>{
        console.log("User updated");
        $('#updateModal').modal('hide');
      },
      error:err=>{
        console.log(err);
      }
    })
  }
  onSubmit():void{
    if(this.user){
    this.updateUser(this.user);
    }
    else{
      console.log("Unable to update user");
    }
  }

}
