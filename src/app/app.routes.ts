import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/components/registration.component';
import { BlogListComponent } from './blogs/components/blog-list/blog-list.component';
import { CreateBlogComponent } from './blogs/components/create-blog/create-blog.component';
import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { AuthorsComponent } from './authors/authors.component';


// config the routes
export const routes: Routes = [
    { path: '', component: HomeComponent, title:"Home"},
    { path: 'registration', component: RegistrationComponent, title:"Registration"},
    { path: 'blogs' ,children:[
        { path: '', component: BlogListComponent, title:"BlogList"},
        { path: 'create-blog', component:CreateBlogComponent, title:"Create Blog"}
        // { path: 'blog/:id', component: BlogDetailComponent }

    ]},
    { path: 'about', component:AboutComponent, title:"About Us"},
    { path: 'authors', component:AuthorsComponent, title:"Authors"}
    
];
