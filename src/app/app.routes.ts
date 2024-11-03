import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/components/registration.component';
import { BlogListComponent } from './blogs/components/blog-list/blog-list.component';
import { CreateBlogComponent } from './blogs/components/create-blog/create-blog.component';
import { AboutComponent } from './about/about.component';
import { AuthorsComponent } from './authors/components/authors-list/authors-list.component';
import { AuthorDetailsComponent } from './authors/components/author-details/author-details.component';
<<<<<<< HEAD
import { MyBlogsListComponent } from './authors/components/my-blogs-list/my-blogs-list.component';
=======
import { UpdateAuthorDetailsComponent } from './authors/components/update-author-details/update-author-details.component';
>>>>>>> 063f9905e27a4680144e27906b0d24d41701e44d


// config the routes
export const routes: Routes = [
    { path: '', component: HomeComponent, title:"Home"},
    { path: 'registration', component: RegistrationComponent, title:"Registration"},
    { path: 'blogs' ,children:[
        { path: '', component: BlogListComponent, title:"BlogList"},
        { path: ':userId', component:CreateBlogComponent, title:"Create-Blog"},
<<<<<<< HEAD
        { path: 'user/:userId', component:MyBlogsListComponent, title:"My-Blogs"}
=======
        { path: 'user/:userId', component:BlogListComponent, title:"My-Blogs"}
>>>>>>> 063f9905e27a4680144e27906b0d24d41701e44d
    ]},
    { path: 'about', component:AboutComponent, title:"About-Us"},
    { path: 'authors', children:[
        { path: '', component:AuthorsComponent, title:"Authors"},
<<<<<<< HEAD
        { path: ':userId', component:AuthorDetailsComponent, title:"Authors-Details"}
    ]}
];
=======
        { path: ':userId', component:AuthorDetailsComponent, title:"Authors-Details"},
        { path: 'edit/:userId', component: UpdateAuthorDetailsComponent, title: "Edit Author"}
    ]}
];
>>>>>>> 063f9905e27a4680144e27906b0d24d41701e44d
