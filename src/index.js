import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import books from "./books";
import Book from "./Book";
function Booklist() {
  return (
    <React.Fragment>
      <h1>Amazon Best Sellers</h1>
      <section className="booklist">
        {/* <EventExamples /> */}
        {books.map((book, index) => {
          // console.log(book);
          return <Book {...book} key={book.id} number={index} />;
        })}
      </section>
    </React.Fragment>
  );
}

// event example
// const EventExamples = () => {
//   const handleFormInput = (event) => {
//     console.log("handle form input");
//   };
//   const handleButtonClick = (event) => {
//     alert("handle button click");
//   };
//   const handleFormSubmissions = (event) => {
//     event.preventDefault();
//     alert("form submitted");
//   };

//   return (
//     <section>
//       <form action="" onSubmit={handleFormSubmissions}>
//         <h2>Typical form</h2>
//         <input
//           type="text"
//           style={{ margin: "1rem 0" }}
//           name="example"
//           onChange={handleFormInput}
//         />
//         <button onClick={handleButtonClick}>click me</button>
//         <button type="submit">submit</button>
//       </form>
//     </section>
//   );
// };

// book component

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Booklist />);
