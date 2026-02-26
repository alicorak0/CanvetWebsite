import { Component } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-component',
  imports: [],
  templateUrl: './contact-component.html',
  styleUrl: './contact-component.css',
})
export class ContactComponent {

  googleMapUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    const url = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2580.960511887833!2d26.405231073100467!3d40.14427951255147!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b1a9fc6714d461%3A0x820fce80b85e0868!2zQ0FOLVZFVCBWRVRFUsSwTkVSIEtMxLBOxLDEnsSw!5e1!3m2!1str!2sus!4v1772114159103!5m2!1str!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
    this.googleMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    this.googleMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);

  }

}
