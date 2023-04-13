import "./Comment.scss";

function Comment(props) {
  let date = new Date(props.timestamp);
  date = date.toLocaleDateString(undefined, {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });
  return (
    <article className="card">
      <div className="card__big-container">
        <img className="card__propic"></img>
        <div className="card__medium-container">
          <div className="card__container">
            <h3 className="card__name">{props.name}</h3>
            <p className="card__date">{date}</p>
          </div>
          <p className="card__comment">{props.comment}</p>
        </div>
      </div>
    </article>
  );
}

export default Comment;
