const books = [
  {
    name: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 15.99,
    img: "images/hans-jurgen-weinhardt-FZ5nx86tP2U-unsplash.jpg",
  },
  {
    name: "1984",
    author: "George Orwell",
    price: 12.49,
    img: "images/hans-jurgen-weinhardt-FZ5nx86tP2U-unsplash.jpg",
  },
  {
    name: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 10.99,
    img: "images/hans-jurgen-weinhardt-FZ5nx86tP2U-unsplash.jpg",
  },
  {
    name: "Pride and Prejudice",
    author: "Jane Austen",
    price: 9.99,
    img: "images/hans-jurgen-weinhardt-FZ5nx86tP2U-unsplash.jpg",
  },
  {
    name: "Moby Dick",
    author: "Herman Melville",
    price: 14.95,
    img: "images/hans-jurgen-weinhardt-FZ5nx86tP2U-unsplash.jpg",
  },
  {
    name: "War and Peace",
    author: "Leo Tolstoy",
    price: 19.99,
    img: "images/hans-jurgen-weinhardt-FZ5nx86tP2U-unsplash.jpg",
  },
  {
    name: "The Catcher in the Rye",
    author: "J.D. Salinger",
    price: 13.99,
    img: "images/hans-jurgen-weinhardt-FZ5nx86tP2U-unsplash.jpg",
  },
  {
    name: "The Hobbit",
    author: "J.R.R. Tolkien",
    price: 11.99,
    img: "images/hans-jurgen-weinhardt-FZ5nx86tP2U-unsplash.jpg",
  },
  {
    name: "Ulysses",
    author: "James Joyce",
    price: 17.99,
    img: "images/hans-jurgen-weinhardt-FZ5nx86tP2U-unsplash.jpg",
  },
  {
    name: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    price: 16.49,
    img: "images/hans-jurgen-weinhardt-FZ5nx86tP2U-unsplash.jpg",
  },
  {
    name: "The Odyssey",
    author: "Homer",
    price: 12.0,
    img: "images/hans-jurgen-weinhardt-FZ5nx86tP2U-unsplash.jpg",
  },
  {
    name: "Brave New World",
    author: "Aldous Huxley",
    price: 13.5,
    img: "images/hans-jurgen-weinhardt-FZ5nx86tP2U-unsplash.jpg",
  },
  {
    name: "The Divine Comedy",
    author: "Dante Alighieri",
    price: 18.99,
    img: "images/hans-jurgen-weinhardt-FZ5nx86tP2U-unsplash.jpg",
  },
  {
    name: "The Brothers Karamazov",
    author: "Fyodor Dostoevsky",
    price: 17.0,
    img: "images/hans-jurgen-weinhardt-FZ5nx86tP2U-unsplash.jpg",
  },
  {
    name: "Don Quixote",
    author: "Miguel de Cervantes",
    price: 15.49,
    img: "images/hans-jurgen-weinhardt-FZ5nx86tP2U-unsplash.jpg",
  },
  {
    name: "Anna Karenina",
    author: "Leo Tolstoy",
    price: 14.99,
    img: "images/hans-jurgen-weinhardt-FZ5nx86tP2U-unsplash.jpg",
  },
  {
    name: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    price: 22.99,
    img: "images/hans-jurgen-weinhardt-FZ5nx86tP2U-unsplash.jpg",
  },
  {
    name: "Frankenstein",
    author: "Mary Shelley",
    price: 8.99,
    img: "images/hans-jurgen-weinhardt-FZ5nx86tP2U-unsplash.jpg",
  },
  {
    name: "Jane Eyre",
    author: "Charlotte Brontë",
    price: 9.49,
    img: "images/hans-jurgen-weinhardt-FZ5nx86tP2U-unsplash.jpg",
  },
  {
    name: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    price: 11.95,
    img: "images/hans-jurgen-weinhardt-FZ5nx86tP2U-unsplash.jpg",
  },
];

// const text = document.getElementById("inputText");
// const btn = document.getElementById("btn");

// function searchBox() {
//   const input = document.getElementById("inputText").value.toLowerCase();
//   const search = document.getElementById("search");
//   const result = books.filter((elcan) => {
//     elcan.name.toLowerCase().includes(input);
//   });
//   if(result.length > 0){
//     result.forEach(element =>{
//         const div = document.createElement("div");

//     })else{
      
//     }
//   }
// }



const kitab = document.getElementById("books");

books.forEach((book) => {
  const bookList = document.createElement("div");
  bookList.classList.add("flex");
  const h2 = document.createElement("h2");
  h2.textContent = book.name;
  const p = document.createElement("p");
  p.classList.add("author");
  p.textContent = book.author;
  const span = document.createElement("span");
  span.classList.add("price");
  span.textContent = book.price;
  const img = document.createElement("img");
  img.src = book.img;
  bookList.appendChild(h2);
  bookList.appendChild(p);
  bookList.appendChild(span);
  bookList.appendChild(img);
  kitab.appendChild(bookList);
});
