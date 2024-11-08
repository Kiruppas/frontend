import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/components/registration.component';
import { BlogListComponent } from './blogs/components/blog-list/blog-list.component';
import { CreateBlogComponent } from './blogs/components/create-blog/create-blog.component';
import { AboutComponent } from './about/about.component';
import { AuthorsComponent } from './authors/components/authors-list/authors-list.component';
import { AuthorDetailsComponent } from './authors/components/author-details/author-details.component';
import { MyBlogsListComponent } from './authors/components/my-blogs-list/my-blogs-list.component';
import { UpdateAuthorDetailsComponent } from './authors/components/update-author-details/update-author-details.component';
import { BlogDetailsComponent } from './blogs/components/blog-details/blog-details.component';
import { UpdateBlogDetailsComponent } from './authors/components/update-blog-details/update-blog-details.component';


// config the routes
export const routes: Routes = [
    { path: '', component: HomeComponent, title:"Home"},
    { path: 'registration', component: RegistrationComponent, title:"Registration"},
    { path: 'blogs' ,children:[
        { path: '', component: BlogListComponent, title:"BlogList"},
        { path: 'user/:userId', component:MyBlogsListComponent, title:"My-Blogs"},
        { path: 'create/:userId', component:CreateBlogComponent, title:"Create-Blog"},
        { path: 'view/:blogId', component: BlogDetailsComponent, title:"View All Blogs" },
        { path: 'edit/:blogId', component: UpdateBlogDetailsComponent, title: "Edit Blog" }
    ]},
    { path: 'about', component:AboutComponent, title:"About-Us"},
    { path: 'authors', children:[
        { path: '', component:AuthorsComponent, title:"Authors"},
        { path: ':userId', component:AuthorDetailsComponent, title:"Authors-Details"},
        { path: 'edit/:userId', component: UpdateAuthorDetailsComponent, title: "Edit Author"},
    ]}
];
