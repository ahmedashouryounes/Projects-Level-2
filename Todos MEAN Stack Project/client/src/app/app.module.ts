import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import { TodoListFormComponent } from './components/todo-list-form/todo-list-form.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './views/auth/signup/signup.component';
import { SigninComponent } from './views/auth/signin/signin.component';
import { HomeComponent } from './views/home/home.component';
import { DeafultBarComponent } from './components/bars/deafult-bar/deafult-bar.component';
import { DeafultFooterComponent } from './components/footer/deafult-footer/deafult-footer.component';
import { NotfoundComponent } from './views/notfound/notfound.component';
import { ProfileComponent } from './views/profile/profile.component';
import { ActhionBarComponent } from './components/bars/acthion-bar/acthion-bar.component'

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListItemComponent,
    TodoListFormComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    DeafultBarComponent,
    DeafultFooterComponent,
    NotfoundComponent,
    ProfileComponent,
    ActhionBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
