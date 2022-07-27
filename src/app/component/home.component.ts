import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: '../design/home.html',
  styleUrls: ['../app.component.css'],
})
export class HomeComponent implements OnInit {
  link = '/';
  judul = 'Mesin Kasir Restoran';
  deskripsi =
    'Pengusaha restoran cafe rumah makan dan kuliner wajib tau mesin kasir restoran ini ,waiters,kitchen ,kasir dan admin lengkap';
  text1 =
    'Bisnis kuliner semakin bertambah, hal ini dikarenakan beraneka ragam dan kreatifitas yang tinggi menjadikan usaha ini semakin atraktif, dengan penciptaan berbagai hal hal yang baru dan viral, baik itu kuliner makanan maupun minuman hingga kue snack dan jajan.';
  text2 =
    'Dan dalam paktik yang terjadi hingga saat ini , industri ini seperti tidak ada matinya, dan akan selalu keluar ide ide baru , entah itu mengemas sebuah oldschool concept menjadi modern dan lain sebagai nya, inilah sebab mengapa bisnis usaha ini akan terus berkembang dari jaman ke jaman, tentunya juga manusia akan selalu membutuhkan makanan dan masing masing individu memiliki selera, yang membuat aneka makanan dan minuman akan terus berkembang hingga saat ini.';
  text3 =
    'Selalu membutuhkan ide cemerlang  dalam proses nya untuk menghasilkan hal baru dan tentunya menarik serta membuat semua orang penasaran adalah solusi terbaik dalam menunjang pemasaran pada penjualan di bidang ini, dan tentu saja citra rasa akan menjadi animo yang signifikan dalam mendatangkan pengunjung hingga menjadi pelanggan setia untuk menikmati aneka kuliner produk makanan dan minuman.';
  text4 =
    'Tentunya akan membutuhkan sebuah pencatatan pembukuan , agar usaha kuliner seperti restoran cafe rumah makan warung kopi toko jajan oleh drink dan food shop dapat cek persediaan stok, melakukan penjualan dengan cepat, memberikan struk kasir via printer kasir pelanggan dan cek laporan laporan detail omset pendapatan hingga laba rugi, dengan system pembukuan yang tertata rapi tentunya akan membantu memajukan usaha, hal ini karna memiliki manajemen dan kebijakan dalam pengelolahan keuangan adalah kunci sukses untuk bisnis kuliner.';
  title1 = 'PEMILIHAN MESIN KASIR RESTORAN CAFE';
  text5 =
    'Penting bagi kita untuk mengetahui mana mesin kasir yang cocok untuk digunakan dalam usaha mu, karna pada usaha jenis ini umumnya terbagi menjadi dua bagian dalam metode transaksi , fastfood adalah metode pembayaran langsung ketika transaksi pemesanan makanan dan minuman terjadi, dan mode meja adalah system yang biasa digunakan pada usaha rumah makan restoran cafe yang dimana pelanggan memilih tempat duduk, kemudian memesan dan nantinya membayar setelah makan, nah mana yang sesuai dengan jenis transaksi mu ?? maka pilih lah system yang mendukung penuh untuk kebutuhan mu. pada fastfood kami juga meyediakan pilihan baik menggunakan offline mode maupun online cloud app untuk digunakan .';
  title2 = 'MESIN KASIR DESKTOP OFFLINE MODE';
  text6 =
    'Setelah mengetahui akan type dan jenis transaksi yang dibutuhkan , kini saatnya untuk memilih metode apa yang cocok dan tepat untuk bisnis mu, dan untuk awal kita akan ulas mengenai offlinde mode yang umumnya disebut dengan destkop version, type jenis ini tidak membutuhkan koneksi internet dalam bekerja, dan beroperasi secara lansgung dengan pos point of sale system dengan media penyimpanan data local , artinya semua database disimpan di dalam perangkat device pos kamu. tentu karna tidak membutuhkan koneksi net maka otomatis lebih cepat dalam penggunaan nya.';
  title3 = 'MESIN KASIR ONLINE WEB APP';
  text7 =
    'Teknologi yang banyak digunakan saat ini, dengan cloud web app maka akan membuat pembukuan mu semakin mobile, ini karena kemudahan nya dengan melakukan installasi applikasi secara online, sehingga kamu bisa akses dimana saja dan kapan saja dari berbagai device perangkat , mulai dari smartphone android,iphone, tablet , laptop dan pc desktop mesin kasir pun dapat mengakses nya dengan sempurna. dengan update teknologi ini maka tentu juga akan memudahkan bagi owner bos maupun staff karyawan waiters kasir kitchen untuk bekerja.';
  title4 = 'WAITERS - KITCHEN - KASIR - ADMIN';
  text8 =
    'Konsep secara khusus dibutuhkan oleh restoran cafe dan rumah makan yang menginginkan kecepatan dalam metode pemesanan dan persiapan menu makanan minuman ke pelanggan, pada offline mode kita dapat memanfaatkan lan kabel atau bisa menggunakan wifi sebagai jaringan perantara jalur untuk membagikan data agar dapat digunakan dengan waiters kasir dan admin maupun kitchen dalam bekerja, pada offline mode kita tidak membutuhkan internet untuk hal ini karna kita hanya membutuhkan jalur nya saja untuk bekerja dengan pembagian data. Selanjutnya pada online mode maka semakin mobile dan cepat tanpa gangguan lagi ketika beralih ke online mode ini, tentu saja karna kemudahan dan mobilitas nya yang dapat diakses secara cepat bersama staff waiters, kitchen dan kasir dalam bekerja, jika pada offline mode kita memiliki keterbatasan jangkauan , misalnya router wifi hanya mampu menangkap dan membagikan data dengan jarak maximum 7 meter sampai 10 meter, maka dengan online mode kita tidak lagi terbatas oleh hal ini karna metode cloud hanya berpengaruh pada koneksi internet saja sehingga tidak mempengaruhi pembatasan jaringan oleh router.';
  text8a =
    'Konsep dan skema pembagian divisi ini bekerja dengan implementasi berikut ini , pada waiters akan mencatat meja dimana pelanggan duduk, selanjutnya mencatat pesanan menu dari pelanggan menggunakan tablet waiters atau dengan online mode dapat menggunakan smartphone nya, selanjutnya pesanan ini bisa dikirimkan ke kitchen melalui print kitchen maupun kitchen display screen, selanjutnya kitchen akan menerima pesanan dan order dari waiters yang dilengkapi dengan data meja pelanggan dan menu makanan maupun minuman yang dipesan, khusus pada premium version resto app kami , maka kita dapat membagi divisi waiters dengan mudah melakukan split order seperti menu makanan masuk ke dapur, menu minuman masuk ke bar dan lain lain sesuai dengan kebutuhan mu. setelah pelanggan selesai makan maka kasir dengan mudah dapat klik pada meja yang di tempati oleh pelanggan , kemudian melakukan transaksi dengan struk kasir atau mencetak bill tagihan untuk pelanggan , dan selanjutnya admin atau owner dapat cek seluruh laporan laporan detail disini mulai dari transaksi penjualan , laba rugi omset profit, laporan kinerja staff , cash flow alur kas keluar dan masuk dengan seslisih yang dirangkum dalam cash flow, serta tutup pembukuan close cash kasir , dan lain sebagai nya.';
  title5 = 'WEBSITE INFORMASI DAN ANDROID';
  text9 =
    'Dan ya.. jika menggunakan online mode maka secara otomatis akan mendapatkan sebuah website informasi yang terintegrasi langsung dengan aplikasi mu, disini kita bisa merubah semua tampilan dan text secara customise dengan selera desain kamu sendiri, dan tentunya semakin menarik pada premium version akan mendapatkan online order, whatsapp order, hingga qr code menu digital - yang berfungsi untuk menampilkan semua menu yang sudah kita inputkan pada aplikasi untuk ditampilkan dan dipilih oleh pelanggan, dan dalam bekerja pelanggan nantinya tinggal scann qrcode menu digital , nantinya pelanggan akan melihat seluruh menu makanan dan minuman yang tersedia. bukan cuma itu saja masih hadir lagi android app informasi untuk semakin dekat dengan pelanggan jika menggunakan online mode untuk kemajuan bisnis usaha restoran cafe rumah makan kuliner mu.';

  constructor() {}

  ngOnInit() {}
}
