import { ViewportScroller } from '@angular/common';
import { Component, DOCUMENT, ElementRef, ViewChild, inject } from '@angular/core';
import { IsActiveMatchOptions, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header-component',
  imports: [RouterModule],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css',
})
export class HeaderComponent {
  @ViewChild('navBar') navBar?: ElementRef<HTMLElement>;

  isMenuOpen = false;
  menuHeight = '';

  // "Hizmetler" aynı sayfanın #hizmetler bölümüne gittiği için fragment eşleşmeye dahil edilmez.
  readonly exactPath: IsActiveMatchOptions = {
    paths: 'exact',
    queryParams: 'ignored',
    matrixParams: 'ignored',
    fragment: 'ignored',
  };

  private readonly document = inject(DOCUMENT);

  constructor() {
    // #hizmetler gibi bağlantılar sticky header'ın altında kalmasın.
    inject(ViewportScroller).setOffset(() => [0, this.navBar?.nativeElement.offsetHeight ?? 0]);
  }

  toggleMenu() {
    if (this.isMenuOpen) {
      this.closeMenu();
      return;
    }

    // Üst bant görünürken header ekranın en üstünde değildir; menü kalan yüksekliği doldurur.
    const headerBottom = this.navBar?.nativeElement.getBoundingClientRect().bottom ?? 0;
    this.menuHeight = `calc(100dvh - ${Math.round(headerBottom)}px)`;
    this.isMenuOpen = true;
    this.document.body.style.overflow = 'hidden';
  }

  closeMenu() {
    this.isMenuOpen = false;
    this.document.body.style.overflow = '';
  }
}
