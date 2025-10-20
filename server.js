const express = require('express');
const app = express();
const port = 3000;

// Middleware untuk parsing JSON
app.use(express.json());

// Serve static files dari folder 'public'
app.use(express.static('public'));

// Data dummy untuk produk e-commerce
let products = [
  { id: 1, name: 'Laptop', price: 1000 },
  { id: 2, name: 'Mouse', price: 20 },
  { id: 3, name: 'Keyboard', price: 50 }
];

// Route untuk mendapatkan semua produk
app.get('/products', (req, res) => {
  res.json(products);
});

// Route untuk mendapatkan produk berdasarkan ID
app.get('/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: 'Produk tidak ditemukan' });
  res.json(product);
});

// Route untuk menambahkan produk baru
app.post('/products', (req, res) => {
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// Route untuk checkout (sederhana)
app.post('/checkout', (req, res) => {
  const { items } = req.body;
  let total = 0;
  items.forEach(item => {
    const product = products.find(p => p.id === item.id);
    if (product) {
      total += product.price * item.quantity;
    }
  });
  res.json({ message: 'Checkout berhasil', total: total });
});

// Route root untuk memastikan server berjalan
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
  console.log(`Server e-commerce berjalan di http://localhost:${port}`);
});
