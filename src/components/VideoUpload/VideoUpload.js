import thumbnail from "../../assets/Images/Upload-video-preview.jpg";
import "./VideoUpload.scss";
import publish from "../../assets/Icons/publish.svg";

function VideoUpload() {
  return (
    <div>
      <section className="videoUpload">
        <div className="videoUpload__container">
          <h1 className="videoUpload__title">Upload Video</h1>
          <form className="videoUpload__info__container">
            <div className="videoUpload__subtitle-image__container">
            <h3 className="videoUpload__subtitle">VIDEO THUMBNAIL</h3>
            <img
              className="videoUpload__image"
              src={thumbnail}
              alt="thumbnail pic"
            />
            </div>
            <div className="videoUpload__input__container">
              <div className="videoUpload__title-input__container">
                <label for="title" className="videoUpload__title-label">
                  TITLE YOUR VIDEO
                </label>
                <input
                  className="videoUpload__title-input"
                  id="title "
                  type="text"
                  name="title"
                  placeholder="Add a title to your video"
                ></input>
              </div>
              <div className="videoUpload__description__container">
                <label
                  for="description"
                  className="videoUpload__description-label"
                >
                  ADD A DESCRIPTION VIDEO
                </label>
                <textarea
                  id="description"
                  className="videoUpload__description"
                  placeholder="Add a description to your video"
                ></textarea>
              </div>
            </div>
          </form>
          <div className="videoUpload__button-cancel__container">
            <div className="videoUpload__button__container">
              <button className="videoUpload__button" type="submit">
                <img
                  className="header__bot-upload-image"
                  src={publish}
                  alt="Publish"
                />
                PUBLISH
              </button>
            </div>
            <h3 className="videoUpload__cancel">CANCEL</h3>
          </div>
        </div>
      </section>
    </div>
  );
}

export default VideoUpload;
