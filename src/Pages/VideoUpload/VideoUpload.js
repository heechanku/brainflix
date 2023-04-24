import thumbnail from "../../assets/Images/Upload-video-preview.jpg";
import "./VideoUpload.scss";
import publish from "../../assets/Icons/publish.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const { REACT_APP_BASE_URL } = process.env;

function VideoUpload() {
  const [error, setError] = useState("");


  const BASE_URL = REACT_APP_BASE_URL;

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/`; 
    navigate(path);
  }

  

  return (
    <div>
      <section className="videoUpload">
        <div className="videoUpload__container">
          <h1 className="videoUpload__title">Upload Video</h1>
          <form className="videoUpload__info__container" id="upload-form" onSubmit={(e) => {
            e.preventDefault()
            const title = e.target.title.value;
            const description = e.target.description.value;

            setError("");

            axios
              .post(`${BASE_URL}/videos`, { title, description })
              .then(() => {
                routeChange()
                alert("Your video has been created!");

              })
              .catch(({ response }) => {
               
                alert("Fill out all the boxes!");

              });
              
          }}
          >
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
                <label htmlFor="title" className="videoUpload__title-label">
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
                  htmlFor="description"
                  className="videoUpload__description-label"
                >
                  ADD A DESCRIPTION VIDEO
                </label>
                <textarea
                  id="description"
                  className="videoUpload__description"
                  placeholder="Add a description to your video"
                  name="description"
                ></textarea>
              </div>
            </div>
          </form>
          <div className="videoUpload__button-cancel__container">
            <div className="videoUpload__button__container">
             
              <button form="upload-form"  className="videoUpload__button" type="submit" >
                <img
                  className="header__bot-upload-image"
                  src={publish}
                  alt="Publish"
                />
                PUBLISH
              </button>
             
            </div>

            <Link className="videoUpload__cancel"  to="/"><button className="videoUpload__cancel">CANCEL</button></Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default VideoUpload;
