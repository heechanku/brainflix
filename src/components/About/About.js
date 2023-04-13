import "./About.scss";
import viewsIcon from "../../assets/Icons/views.svg";
import likesIcon from "../../assets/Icons/likes.svg";

function About(props) {
  let date = new Date(props.video.timestamp);
  date = date.toLocaleDateString(undefined, {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });

  return (
    <div className="hero__about__container">
      <h1 className="hero__title">{props.video.title}</h1>
      <div className="hero__info__container">
        <div className="hero__medium__container">
          <h3 className="hero__info--channel hero__info hero__margin">
            By {props.video.channel}
          </h3>
          <h3 className="hero__info">{date}</h3>
        </div>
        <div className="hero__medium__container hero__medium__container--icons">
          <div className="hero__icon__container hero__margin">
            <img className="hero__icon" src={viewsIcon} alt="views icon"></img>
            <h3 className="hero__info">{props.video.views}</h3>
          </div>
          <div className="hero__icon__container">
            <img className="hero__icon" src={likesIcon} alt="likes icon"></img>
            <h3 className="hero__info">{props.video.likes}</h3>
          </div>
        </div>
      </div>
      <div className="hero__description__container">
        <p className="hero__description">{props.video.description}</p>
      </div>
    </div>
  );
}

export default About;
