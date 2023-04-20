import propic from "../../assets/Images/Mohan-muruge.jpg";
import "./Comments.scss";
import Submit from "../../assets/Icons/add_comment.svg";
import Comment from "./Comment";

function Comments(props) {

  
  let lengthofComments = props.video.comments.length;


  return (
    <>
      <section className="comments">
        <h2 className="comments__title">{lengthofComments} Comments</h2>
        <div className="comments__input">
          <img
            className="comments__profile-pic"
            src={propic}
            alt="Profile Pic"
          />
          <div className="comments__info">
            <form className="comments__info__form">
              <div className="comments__info__container">
                <label htmlFor="comment" className="comments__info__comment">
                  JOIN THE CONVERSATION
                </label>
                <textarea
                  id="comment"
                  className="comments__info__comment-input"
                  name="comment"
                  placeholder="Add a new comment"
                ></textarea>
              </div>
              <div className="comments__submit">
                <button className="comments__submit-button">
                  <img
                    className="comments__submit-button__image"
                    src={Submit}
                    alt="Add Comment Button"
                  />
                  COMMENT
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="comments__section">
          <section className="card-list">
            {props.video.comments.map((comment, index) => (
              <Comment
                key={comment.id}
                name={comment.name}
                comment={comment.comment}
                id={comment.id}
                timestamp={comment.timestamp}
              />
            ))}
          </section>
        </div>
      </section>
    </>
  );
}

export default Comments;
