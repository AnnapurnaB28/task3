const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let books = [
  { id: 1, title: "Book One", author: "Author A" },
  { id: 2, title: "Book Two", author: "Author B" }
];

// GET all books
app.get('/books', (req, res) => {
  res.json(books);
});
app.get('/', (req, res) => {
  res.send("Welcome to Book API!");
});


// POST a new book
app.post('/books', (req, res) => {
  const newBook = req.body;
  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT (update) a book by ID
app.put('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const updatedBook = req.body;
  books = books.map(book => (book.id === bookId ? updatedBook : book));
  res.json(updatedBook);
});

// DELETE a book by ID
app.delete('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  books = books.filter(book => book.id !== bookId);
  res.sendStatus(204);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
