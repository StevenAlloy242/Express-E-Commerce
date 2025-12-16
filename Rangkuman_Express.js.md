# Rangkuman Singkat tentang Express.js

## Pengantar
Express.js adalah framework web populer untuk Node.js yang ringan, fleksibel, dan minimalis. Dibuat oleh TJ Holowaychuk pada 2010 sebagai alternatif sederhana dari framework Connect, Express.js memudahkan pengembangan aplikasi web dan API dengan menyediakan abstraksi untuk HTTP dan middleware. Framework ini tidak mencakup database atau template engine secara default, sehingga pengembang dapat menambahkannya sesuai kebutuhan. Cocok untuk API sederhana hingga aplikasi kompleks, sering digunakan sebagai backbone backend dengan database seperti MongoDB dan frontend seperti React. Versi stabil terbaru adalah 4.x, dengan jutaan unduhan npm bulanan.

## Fitur Utama
- **Routing**: Mendukung rute HTTP (GET, POST, PUT, DELETE) dengan parameter dinamis, seperti `/users/:id` untuk mengakses data berdasarkan ID.
- **Middleware**: Fungsi yang diproses sebelum handler akhir, seperti `express.json()` untuk parsing JSON, atau middleware kustom untuk autentikasi.
- **Static Files**: Menyajikan file statis seperti CSS, JS, gambar dari folder tertentu menggunakan `app.use(express.static('public'))`.
- **Error Handling**: Mekanisme untuk menangani error dengan middleware khusus yang memiliki empat parameter: `err`, `req`, `res`, `next`.
- **Template Engines**: Integrasi dengan engine seperti EJS atau Pug untuk rendering HTML dinamis di server-side.

## Penggunaan Dasar
Instal via npm: `npm install express`.

Contoh aplikasi sederhana (mirip server.js e-commerce):

```javascript
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

let products = [
  { id: 1, name: 'Laptop', price: 1000 },
  { id: 2, name: 'Mouse', price: 20 }
];

app.get('/products', (req, res) => res.json(products));

app.post('/checkout', (req, res) => {
  const { items } = req.body;
  let total = 0;
  items.forEach(item => {
    const product = products.find(p => p.id === item.id);
    if (product) total += product.price * item.quantity;
  });
  res.json({ message: 'Checkout berhasil', total });
});

app.listen(port, () => console.log(`Server di port ${port}`));
```

Aplikasi ini membuat server e-commerce dasar dengan endpoint produk dan checkout.

## Keunggulan dan Kelemahan
**Keunggulan**:
- Setup cepat dan sederhana, cocok untuk prototyping.
- Fleksibel: Pengembang bebas memilih komponen tambahan seperti database atau security.
- Komunitas besar dengan banyak middleware pihak ketiga (cors, helmet, morgan).
- Integrasi mudah dengan ekosistem NPM dan modul Node.js lainnya.
- Cross-platform, berjalan di Windows, macOS, Linux.

**Kelemahan**:
- Kurang opiniated: Struktur aplikasi tergantung pengembang, bisa menyebabkan inkonsistensi.
- Performa kurang optimal untuk aplikasi skala besar; untuk enterprise, gunakan framework seperti NestJS.
- Kurva pembelajaran awal untuk memahami middleware dan routing.
- Tidak ada built-in security features, perlu tambahan modul seperti Helmet.

## Kesimpulan
Express.js ideal untuk backend Node.js karena kemudahan dan ekstensinya. Cocok untuk proyek kecil hingga menengah, dengan dokumentasi di expressjs.com sebagai referensi utama.
