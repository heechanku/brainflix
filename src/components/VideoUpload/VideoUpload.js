import thumbnail from "../../assets/Images/Upload-video-preview.jpg";

function VideoUpload() {
  return (
    <div>
      <section className="videoUpload">
        <div className="videoUpload__container">
          <h1 className="videoUpload__title">Upload Video</h1>
          <div className="videUpload__info__container">
            <h3 className="videoUplaod__subtitle">VIDEO THUMBNAIL</h3>
            <img src={thumbnail} alt="thumbnail pic" />
            <div className="videoUplaod__input__container">
              <div className="videoUpload__title-input__container">
                <label for="title" className="videoUpload__title-input">
                  TITLE YOUR VIDEO
                </label>
                <input
                  id="title "
                  type="text"
                  name="title"
                  placeholder="Add a title to your video"
                ></input>
              </div>
              <div className="videoUpload__description__container">
                <label for="description" className="videoUpload__description">
                  TITLE YOUR VIDEO
                </label>
                <textarea
                  id="description"
                  className="videoUpload__description"
                  placeholder="Add a description to your video"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default VideoUpload;
