import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: '../design/contact.html',
  styleUrls: ['../app.component.css'],
})
export class ContactComponent implements OnInit {
  link = '/download';
  judul = 'Download Mesin Kasir Restoran';
  deskripsi =
    'Free download gratis e-calatog mesin kasir aplikasi restoran cafe rumah makan';
  download =
    'https://mesinkasir.github.io/larapos/e-catalog/TOUCHSCREEN POS.pdf';
  text1 = 'E-catalog Mesin Kasire restoran';
  constructor(private meta: Meta, private title: Title) {
    this.meta.addTags([
      {
        name: 'twitter:description',
        content:
          'Free download gratis e-calatog mesin kasir aplikasi restoran cafe rumah makan',
      },
    ]);
    this.setTitle('Mesin Kasir Restoran');
  }
  public setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }
  ngOnInit() {}
}
