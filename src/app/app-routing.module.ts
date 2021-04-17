import { AuthorComponent } from './author/author.component';
import { BookComponent } from './book/book.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
                          {path: '', component: HomeComponent},
                          {path: 'login', component: LoginComponent},
                          {path: 'signin', component: SigninComponent},
                          {path: 'book', component: BookComponent},
                          {path: 'author', component: AuthorComponent}
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
