import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { BlogListComponent } from './blogs/components/blog-list/blog-list.component';
import { CreateBlogComponent } from './blogs/components/create-blog/create-blog.component';
import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { BlogDetailsComponent } from './blogs/components/blog-details/blog-details.component';


// config the routes
export const routes: Routes = [
    { path: '', component: HomeComponent, title:"Home Page"},
    { path: 'registration', component: RegistrationComponent, title:"Registration Page"},
    { path: 'blogs' ,children:[
<<<<<<< Updated upstream
        { path: '', component: BlogListComponent},
        { path: 'create-blog', component:CreateBlogComponent}
        // { path: 'blog/:id', component: BlogDetailComponent }
=======
        { path: '', component: BlogListComponent, title:"BlogList"},
        { path: 'create-blog', component:CreateBlogComponent, title:"Create Blog"},
        { path: ':blogId', component: BlogDetailsComponent }
>>>>>>> Stashed changes

    ]},
    { path: 'about', component:AboutComponent},
    { path: 'my-profile', component:MyProfileComponent}

    
];
