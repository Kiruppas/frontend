import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
    <div class="container px-4 py-5">
      <h2 class="pb-2 border-bottom">About Us</h2>

      <div class="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
        <div class="col d-flex flex-column align-items-start gap-2">
          <h2 class="fw-bold text-body-emphasis">
            Effortlessly Manage Your Blog with Our Awesome Features
          </h2>
          <p class="text-body-secondary">
            We understand that running a successful blog requires more than just
            great writing. That's why we've built a platform designed to
            streamline your workflow and free up your time to focus on what
            matters most: creating engaging content. Our intuitive interface
            simplifies complex tasks, making blog management efficient and
            enjoyable. We've integrated powerful tools to handle everything from
            scheduling posts to analyzing your audience engagement, all in one
            convenient location. Ready to get started?
          </p>
          <!-- <a routerLink="/blogs" class="btn btn-outline-primary btn-lg px-4"
            >View Blogs</a
          > -->
        </div>

        <div class="col">
          <div class="row row-cols-1 row-cols-sm-2 g-4">
            <div class="col d-flex flex-column gap-2">
              <div
                class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3"
              ></div>
              <h4 class="fw-semibold mb-0 text-body-emphasis">
                Intuitive Interface, Effortless Blogging
              </h4>
              <p class="text-body-secondary">
                Effortlessly manage your blog with our intuitive platform.
              </p>
            </div>

            <div class="col d-flex flex-column gap-2">
              <div
                class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3"
              ></div>
              <h4 class="fw-semibold mb-0 text-body-emphasis">
                Powerful Tools for Blog Growth
              </h4>
              <p class="text-body-secondary">
                Boost your blog's SEO with our powerful optimization tools.
              </p>
            </div>

            <div class="col d-flex flex-column gap-2">
              <div
                class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3"
              ></div>
              <h4 class="fw-semibold mb-0 text-body-emphasis">
                Dedicated Support & Community
              </h4>
              <p class="text-body-secondary">
                We're here to help you every step of the way.
              </p>
            </div>

            <div class="col d-flex flex-column gap-2">
              <div
                class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3"
              ></div>
              <h4 class="fw-semibold mb-0 text-body-emphasis">
                Reclaim Your Time, Maximize Your Output
              </h4>
              <p class="text-body-secondary">
                Reclaim your valuable time and focus on what matters most.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class AboutComponent {}
