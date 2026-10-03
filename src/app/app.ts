import { Component, DOCUMENT, inject, signal } from '@angular/core';
import { HeaderComponent } from './component/header-component/header-component';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from './component/footer-component/footer-component';
import { Meta } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('QRMenu');

  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  constructor() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let route = this.activatedRoute.firstChild;
          while (route?.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        mergeMap((route) => route?.data ?? [])
      )
      .subscribe((data) => {
        const description = data['description'] as string | undefined;
        const canonical = data['canonical'] as string | undefined;

        if (description) {
          this.meta.updateTag({ name: 'description', content: description });
          this.meta.updateTag({ property: 'og:description', content: description });
          this.meta.updateTag({ name: 'twitter:description', content: description });
        }

        if (canonical) {
          this.meta.updateTag({ property: 'og:url', content: canonical });
          this.setCanonicalLink(canonical);
        }
      });
  }

  private setCanonicalLink(url: string): void {
    let link: HTMLLinkElement | null = this.document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }
}
