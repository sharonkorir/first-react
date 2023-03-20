import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

function Booklist() {
  return (
    <section className="booklist">
      <EventExamples />
      {books.map((book) => {
        // console.log(book);
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
}

// event example
const EventExamples = () => {
  const handleFormInput = (event) => {
    console.log("handle form input");
  };
  const handleButtonClick = (event) => {
    alert("handle button click");
  };
  const handleFormSubmissions = (event) => {
    event.preventDefault();
    alert("form submitted");
  };

  return (
    <section>
      <form action="" onSubmit={handleFormSubmissions}>
        <h2>Typical form</h2>
        <input
          type="text"
          style={{ margin: "1rem 0" }}
          name="example"
          onChange={handleFormInput}
        />
        <button onClick={handleButtonClick}>click me</button>
      </form>
    </section>
  );
};

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
const Book = (props) => {
  const { img, title, author } = props;

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
