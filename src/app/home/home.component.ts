import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="container col-xxl-8 px-4 py-5">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-10 col-sm-8 col-lg-6">
          <img
            src="https://th.bing.com/th/id/OIP.770rgaeOFW-66qxIQ8f41gAAAA?rs=1&pid=ImgDetMain"
            class="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            Powerful Features for Bloggers
          </h1>
          <p class="lead">
            Our blog management platform offers a comprehensive suite of
            features designed to help you succeed. From rich text editing and
            media management to SEO optimization tools and detailed analytics,
            we've got you covered.
          </p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <a
              routerLink="/registration"
              class="btn btn-primary btn-lg px-4 me-md-2"
              >Registration</a
            >
            <a routerLink="/blogs" class="btn btn-outline-secondary btn-lg px-4"
              >View Blogs</a
            >
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class HomeComponent {}
