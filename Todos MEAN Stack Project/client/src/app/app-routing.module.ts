import { ProfileComponent } from './views/profile/profile.component';
import { NotfoundComponent } from './views/notfound/notfound.component';
import { SigninComponent } from './views/auth/signin/signin.component';
import { SignupComponent } from './views/auth/signup/signup.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListFormComponent } from './components/todo-list-form/todo-list-form.component';

const routes: Routes = [
  {
    path:'',
    component : HomeComponent
  },
  {
    path:'signup',
    component : SignupComponent 
  },

  {
    path:'signin',
    component : SigninComponent
  },
  {
    path:'profile',
    component: ProfileComponent
  },
  {
    path:'form/:id',
    component: TodoListFormComponent
  },
  {
    path:'**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
