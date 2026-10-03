import { Component } from '@angular/core';
import { ContactPanelComponent } from '../contact-panel-component/contact-panel-component';

@Component({
  selector: 'app-contact-component',
  imports: [ContactPanelComponent],
  templateUrl: './contact-component.html',
  styleUrl: './contact-component.css',
})
export class ContactComponent {
  readonly directionsUrl = 'https://share.google/O31fc6nVx3KN56NcL';
}
