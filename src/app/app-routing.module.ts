import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { fieldComponent } from './field/field.component';
import { subjectsComponent } from './subjects/subjects.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';

const routes: Routes = [
  { path: '', redirectTo:'subjects', pathMatch: 'full' },
  { path: 'subjects', component: subjectsComponent},
  { path: 'field', component: fieldComponent},
  {path:'users', component:UsersComponent,children:[{path:':id/:name',component:UserComponent}]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
