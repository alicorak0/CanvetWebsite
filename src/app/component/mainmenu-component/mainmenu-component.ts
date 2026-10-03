import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactPanelComponent } from '../contact-panel-component/contact-panel-component';

@Component({
  selector: 'app-mainmenu-component',
  imports: [RouterModule, ContactPanelComponent],
  templateUrl: './mainmenu-component.html',
  styleUrls: ['./mainmenu-component.css'],
})
export class MainmenuComponent implements AfterViewInit, OnDestroy {
  @ViewChild('fieldGalleryGrid') fieldGalleryGrid?: ElementRef<HTMLElement>;

  readonly directionsUrl = 'https://share.google/O31fc6nVx3KN56NcL';

  readonly services = [
    {
      number: '01',
      icon: '/figma/icon-syringe.svg',
      title: 'Aşılama ve koruyucu hekimlik',
      body: 'Bölgesel epidemiyolojik risklere ve yaş grubuna göre planlanan düzenli bağışıklama ve parazit protokolleri.',
    },
    {
      number: '02',
      icon: '/figma/icon-service-2.svg',
      title: 'Doğum ve jinekolojik takip',
      body: 'Gebelik kontrolü, reprodüksiyon yönetimi, ultrasonik tarama ve doğum anında uzman müdahale süreçleri.',
    },
    {
      number: '03',
      icon: '/figma/icon-service-3.svg',
      title: 'Buzağı ve neonatal bakım',
      body: 'Doğum sonrası ilk kolostrum değerlendirmesi, gelişim takibi, enfeksiyon koruması ve kritik dönem desteği.',
    },
    {
      number: '04',
      icon: '/figma/icon-service-4.svg',
      title: 'Teşhis ve tedavi uygulamaları',
      body: 'Klinik muayene ile semptoma özel, hızlı ve kontrollü tedavi; antibiyogram ve kan değerleri odaklı ilaç seçimi.',
    },
    {
      number: '05',
      icon: '/figma/icon-service-5.svg',
      title: 'Rutin sağlık taramaları',
      body: 'İştah, davranış, tüy kondisyonu, kilo ve genel beden skorlaması üzerinden periyodik check-up muayeneleri.',
    },
    {
      number: '06',
      icon: '/figma/icon-service-6.svg',
      title: 'Danışmanlık ve yönlendirme',
      body: 'Bakım, rasyon dengesi, sürü yönetimi ve barınak havalandırması konularında uygulanabilir veterinerlik tavsiyeleri.',
    },
  ];

  readonly fieldCards = [
    {
      image: '/card1.jpg',
      alt: 'Büyükbaş hayvana saha koşullarında aşı uygulaması',
      position: 'center',
      kicker: 'Sahadan Kare · 01',
      label: 'Saha Aşı & Tedavi',
      body: '',
    },
    {
      image: '/card3.jpg',
      alt: 'Samanlıkta iki benekli buzağı',
      position: 'center',
      kicker: 'Sahadan Kare · 02',
      label: 'Neonatal Buzağı Takibi',
      body: 'Doğum sonrası ilk günlerde kolostrum, gelişim ve enfeksiyon takibiyle buzağıların kritik dönemini destekliyoruz.',
    },
    {
      image: '/slide1.jpg',
      alt: 'Saha koşullarında koruyucu aşı uygulaması',
      position: '51% center',
      kicker: 'Sahadan Kare · 03',
      label: 'Planlı Koruyucu Aşı',
      body: '',
    },
    {
      image: '/card4.jpg',
      alt: 'Stetoskopla büyükbaş hayvan muayenesi',
      position: 'center',
      kicker: 'Sahadan Kare · 04',
      label: 'Kalp & Akciğer Oskültasyonu',
      body: '',
    },
  ];

  readonly beeChecklist = [
    'Koloni genel sağlık kontrolü ve kovan içi güç değerlendirmesi',
    'Varroa ve bakteriyel riskler için doğru zamanlı hekimlik yönlendirmesi',
    'Sezonluk bakım planlaması ve besleme stratejileri',
    'Temel arıcılık ekipman ve koruyucu takvim danışmanlığı',
  ];

  private cardObserver?: IntersectionObserver;
  private mobileMediaQuery?: MediaQueryList;
  private mobileQueryListener = () => this.setupCardFlipObserver();

  ngAfterViewInit(): void {
    if (typeof window === 'undefined') {
      return;
    }
    this.mobileMediaQuery = window.matchMedia('(max-width: 1023px)');
    this.mobileMediaQuery.addEventListener('change', this.mobileQueryListener);
    this.setupCardFlipObserver();
  }

  ngOnDestroy(): void {
    this.cardObserver?.disconnect();
    this.mobileMediaQuery?.removeEventListener('change', this.mobileQueryListener);
  }

  private setupCardFlipObserver(): void {
    this.cardObserver?.disconnect();

    const isMobile = this.mobileMediaQuery?.matches ?? false;
    const cards = this.fieldGalleryGrid?.nativeElement.querySelectorAll<HTMLElement>('.field-gallery-card');

    if (!cards) {
      return;
    }

    cards.forEach((card) => card.classList.remove('is-flipped'));

    if (!isMobile) {
      return;
    }

    this.cardObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          entry.target.classList.toggle('is-flipped', entry.isIntersecting);
        }
      },
      {
        root: null,
        rootMargin: '-45% 0px -45% 0px',
        threshold: 0,
      }
    );

    cards.forEach((card) => this.cardObserver!.observe(card));
  }
}
