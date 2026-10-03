import { Routes } from '@angular/router';
import { MainmenuComponent } from './component/mainmenu-component/mainmenu-component';
import { ContactComponent } from './component/contact-component/contact-component';

export const routes: Routes = [
  { path: '', redirectTo: 'anasayfa', pathMatch: 'full' },
  {
    path: 'anasayfa',
    component: MainmenuComponent,
    title: 'Canvet Veteriner Kliniği | Çanakkale Veteriner Kliniği',
    data: {
      description:
        'Canvet Veteriner Kliniği, Çanakkale veteriner kliniği arayanlar için klinik muayene, koruyucu hekimlik, saha hizmeti ve danışmanlık sunar. Çanakkale merkez, Lapseki, Ezine, Biga, Bayramiç ve Çardak bölgelerine hizmet verir.',
      canonical: 'https://canvetveterinerklinigi.com/anasayfa',
    },
  },
  {
    path: 'iletisim',
    component: ContactComponent,
    title: 'İletişim | Canvet Veteriner Kliniği',
    data: {
      description:
        'Canvet Veteriner Kliniği iletişim bilgileri: telefon, Çanakkale Namık Kemal Mahallesi adresi, sosyal medya kanalları ve hizmet bölgesi. Randevu ve bilgi için bize ulaşın.',
      canonical: 'https://canvetveterinerklinigi.com/iletisim',
    },
  },
  { path: '**', redirectTo: 'anasayfa' },
];
