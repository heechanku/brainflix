import "./App.scss";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Comments from "./components/Comments/Comments";
import Videos from "./components/Videos/Videos"
import { useState } from "react";
import Videodetails from "./assets/Data/video-details.json"




function App() {
  const [selectedVideo, setSelectedVIdeo] = useState(Videodetails[0]);

  const handleSelectVideo = (clickedId) => {
    const foundVideo = Videodetails.find((video) => video.id === clickedId);

   
    setSelectedVIdeo(foundVideo);
  };


  return (
    <div>
    <Header />
    <Hero video={selectedVideo}/>
    <Comments video={selectedVideo}/>
    <Videos videos={Videodetails} selectedVideo={handleSelectVideo} video={selectedVideo}/>
   
    </div>
  );
}

export default App;
