import { Routes } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';

export const routes: Routes = [
    {path:"",component:UserListComponent},
    {path:'user-form',component:UserFormComponent}
];
