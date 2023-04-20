import "./Home.scss"
import Hero from "../../components/Hero/Hero";
import Comments from "../../components/Comments/Comments";
import Videos from "../../components/Videos/Videos";
import { useState, useEffect } from "react";
import About from "../../components/About/About";
import axios from "axios";
import { useParams } from "react-router-dom";
const { REACT_APP_BASE_URL } = process.env;


function Home() {
    const [videoDetails, setVideoDetails] = useState(null);
    const [selectedVideo, setSelectedVIdeo] = useState(null);
    const { id } = useParams();
    
  
    const BASE_URL = REACT_APP_BASE_URL;
  
  
  
    useEffect(() => {
      getVideos();
    }, []);
  
    useEffect(() => {
      
      const videoDetail = id || videoDetails?.[0]["id"];
  
      if (videoDetail) {
        setSelectedVIdeo(null);
        axios
          .get(
            `${BASE_URL}/videos/${videoDetail}`
          )
          .then(({ data }) => {
            setSelectedVIdeo(data[0]);
            

          })
          .catch((e) => {});
      }
      
    }, [id, videoDetails]);

    function getVideos() {
      axios.get(`${BASE_URL}/videos`).then(({ data }) => {
        setVideoDetails(data);
      });
    }
  
    if (!videoDetails) return <p>Loading videos...</p>;
  
    return (
      <div>
        {selectedVideo ? <Hero video={selectedVideo} /> : <div>loading</div>}
  
        <div className="about-comments-videos__container">
          <div className="about-comments__container">
            {selectedVideo ? <About video={selectedVideo} /> : <div>loading</div>}
            {selectedVideo ? (
              <Comments video={selectedVideo} />
            ) : (
              <div>loading</div>
            )}
          </div>
          {selectedVideo ? (
            <Videos videos={videoDetails} video={selectedVideo} />
          ) : (
            <div>loading</div>
          )}
        </div>
      </div>
    );
  }

  export default Home