import "./Home.scss"
import Hero from "../../components/Hero/Hero";
import Comments from "../../components/Comments/Comments";
import Videos from "../../components/Videos/Videos";
import { useState, useEffect } from "react";
import About from "../../components/About/About";
import axios from "axios";
import { useParams } from "react-router-dom";

function Home() {
    const [videoDetails, setVideoDetails] = useState(null);
    const [selectedVideo, setSelectedVIdeo] = useState(null);
    const { id } = useParams();
    
  
    const BASE_URL = "https://project-2-api.herokuapp.com";
  
  
  
    useEffect(() => {
      axios
        .get(
          `${BASE_URL}/videos?api_key=ab03e4b2-b165-44ba-9626-1f077a7c18bb`
        )
        .then((res) => {
          setVideoDetails(res.data);
        });
    }, []);
  
    useEffect(() => {
  
      const videoDetail = id || videoDetails?.[0]["id"];
  
      if (videoDetail) {
        setSelectedVIdeo(null);
        axios
          .get(
            `${BASE_URL}/videos/${videoDetail}?api_key=ab03e4b2-b165-44ba-9626-1f077a7c18bb`
          )
          .then(({ data }) => {
            setSelectedVIdeo(data);
          })
          .catch((e) => {});
      }
      
    }, [id, videoDetails]);
  
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