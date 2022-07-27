import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: '../design/about.html',
  styleUrls: ['../app.component.css'],
})
export class AboutComponent implements OnInit {
  link = '/demo';
  judul = 'Demo Mesin Kasir Restoran';
  deskripsi =
    'cara penggunaan mesin kasir restoran ,waiters,kitchen ,kasir dan admin lengkap';
  alt = 'Demo penggunaan mesin kasir restoran';
  text1 = 'Intro POS Resto touchscreen';
  text2 = 'Single Standalone kasir';
  text3 = 'Kitchen dan BAR Print';
  text4 = 'Waiters Tablet Order';
  text5 = 'Waiters - Kasir - Kitchen Offline';
  text6 = 'Resto Online + Website + Whastapp Order Online';
  text7 = 'Online Update Resto Web App';
  text8 = 'Android resto app';
  text9 = 'Premium Resto App - split kitchen';
  constructor(private meta: Meta, private title: Title) {
    this.meta.addTags([
      {
        name: 'description',
        content:
          'cara penggunaan mesin kasir restoran ,waiters,kitchen ,kasir dan admin lengkap',
      },
    ]);
    this.setTitle('Mesin Kasir Restoran');
  }
  public setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }
  ngOnInit() {}
}
