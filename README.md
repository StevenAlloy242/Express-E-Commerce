GET /products: Mengembalikan array produk.
GET /products/1: Mengembalikan produk dengan ID 1.
GET /products/999: Mengembalikan error 404 untuk produk tidak ditemukan.
POST /products: Berhasil menambah produk baru (Headphones).
POST /checkout: Berhasil menghitung total checkout untuk items yang ada.
GET /: Mengembalikan halaman HTML utama.

Kalo npm run/start ga bekerja coba curl -X GET http://localhost:3000/