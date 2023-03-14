import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

function Booklist() {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { img, title, author, id } = book;
        // console.log(book);
        return <Book img={img} title={title} author={author} key={id} />;
      })}
    </section>
  );
}

const books = [
  {
    author: "Prince Harry The Duke of Sussex",
    title: "Spare",
    img: "./images/book1.jpg",
    id: 1,
  },
  {
    author: "Rick Rubin",
    title: "The Creative Act: A Way of Being",
    img: "https://m.media-amazon.com/images/I/A1YhM3oRFbL.jpg",
    id: 2,
  },
];

// book component
const Book = ({ img, title, author }) => {
  // console.log(props);

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Booklist />);
