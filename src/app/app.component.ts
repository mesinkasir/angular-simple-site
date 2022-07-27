import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  menu1 = 'Home';
  menu2 = 'Demo';
  menu3 = 'Download';
  menu1url = '/';
  menu2url = '/demo';
  menu3url = '/download';
  wabtn = 'Whatsapp Now';
  mail = 'Sent Email';
  wa = 'https://wa.me/6285646104747';
  email = 'mailto:axcora@gmail.com';
  text = 'Hubungi kami untuk informasi mesin kasir restoran';
}
