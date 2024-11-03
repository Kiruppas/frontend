import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/components/registration.component';
import { BlogListComponent } from './blogs/components/blog-list/blog-list.component';
import { CreateBlogComponent } from './blogs/components/create-blog/create-blog.component';
import { AboutComponent } from './about/about.component';
<<<<<<< HEAD
import { AuthorsComponent } from './authors/components/authors-list/authors-list.component';
import { AuthorDetailsComponent } from './authors/components/author-details/author-details.component';
import { MyBlogsListComponent } from './authors/components/my-blogs-list/my-blogs-list.component';
import { UpdateAuthorDetailsComponent } from './authors/components/update-author-details/update-author-details.component';
=======
import { MyProfileComponent } from './my-profile/my-profile.component';
import { BlogDetailsComponent } from './blogs/components/blog-details/blog-details.component';
>>>>>>> e1c763dac0993bf562350b71da0b20a5e1178014


// config the routes
export const routes: Routes = [
    { path: '', component: HomeComponent, title:"Home"},
    { path: 'registration', component: RegistrationComponent, title:"Registration"},
    { path: 'blogs' ,children:[
<<<<<<< HEAD
        { path: '', component: BlogListComponent, title:"BlogList"},
        { path: ':userId', component:CreateBlogComponent, title:"Create-Blog"},
        { path: 'user/:userId', component:MyBlogsListComponent, title:"My-Blogs"}
=======
<<<<<<< Updated upstream
        { path: '', component: BlogListComponent},
        { path: 'create-blog', component:CreateBlogComponent}
        // { path: 'blog/:id', component: BlogDetailComponent }
=======
        { path: '', component: BlogListComponent, title:"BlogList"},
        { path: 'create-blog', component:CreateBlogComponent, title:"Create Blog"},
        { path: ':blogId', component: BlogDetailsComponent }
>>>>>>> Stashed changes

>>>>>>> e1c763dac0993bf562350b71da0b20a5e1178014
    ]},
    { path: 'about', component:AboutComponent, title:"About-Us"},
    { path: 'authors', children:[
        { path: '', component:AuthorsComponent, title:"Authors"},
        { path: ':userId', component:AuthorDetailsComponent, title:"Authors-Details"},
        { path: 'edit/:userId', component: UpdateAuthorDetailsComponent, title: "Edit Author"}
    ]}
];
