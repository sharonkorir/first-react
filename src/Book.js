const Book = (props) => {
  const { img, title, author } = props;

  // console.log(props);
  const displayTitle = () => {
    console.log(title);
  };
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={displayTitle}>Display title</button>
      <h4>{author}</h4>
    </article>
  );
};

export default Book;
