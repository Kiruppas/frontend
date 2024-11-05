import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="container col-xxl-8 px-4 py-5" style="margin-top: 45px;">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-10 col-sm-8 col-lg-6">
          <img
            src="https://9sail.com/wp-content/uploads/2020/01/Importance-of-Blogging-for-Your-Business-scaled.jpeg"
            class="d-block mx-md-auto img-fluid"
            alt="Bootstrap Themes"
            width="500"
            height="400"
            loading="lazy"
            style="border: 1px solid white;"
          />
        </div>
        <div class="col-lg-6 ">
          <h1 style="color: #00095b; font-weight:bold;">
            Powerful Features for Bloggers
          </h1>
          <p class="lead text-white">
            Our blog management platform offers a comprehensive suite of
            features designed to help you succeed. From rich text editing and
            media management to SEO optimization tools and detailed analytics,
            we've got you covered.
          </p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <a
              routerLink="/registration"
              class="btn btn-outline-light btn-lg px-4 me-md-2"
              >Registration</a
            >
            <a routerLink="/blogs" class="btn btn-outline-light btn-lg px-4"
              >View Blogs</a
            >
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``
})
export class HomeComponent {}
