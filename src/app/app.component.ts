import {
  Component
} from '@angular/core';

@Component({
  selector: 'tw-root',
  template: `
  <div class="container">
    <header class="header clearfix">
      <nav>
        <ul class="nav nav-pills float-right">
          <li class="nav-item">
            <a class="nav-link" routerLink="/simple">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLinkActive="active" routerLink="/simple">Simple</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLinkActive="active" routerLink="/nested">Nested</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLinkActive="active" routerLink="/array">Array</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLinkActive="active" routerLink="/custom">Custom</a>
          </li>
        </ul>
      </nav>
      <h3 class="text-muted">Dynamic forms with angular</h3>
    </header>

    <main class="container" role="main">
      <router-outlet></router-outlet>
    </main>
  </div>
  `
})
export class AppComponent {
}
