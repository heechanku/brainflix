import React from "react";
import "./Videos.scss"




function Videos(props) {

 

  
  
  const otherVideos = props.videos.filter(video => video.id !== props.video.id)


  

    
  return (
    <>
      <div className="video">
        <h4 className="video__next">NEXT VIDEO</h4>
        {otherVideos.map((video) => (
          <button  onClick={ () => { props.selectedVideo(video.id) } } key={video.id} className="video__container" >
        <img
          className="video__container-image"
          src={video.image}
          alt={video.title}
        />
        <div className="video__sub">
          <h2 className="video__sub-title">{video.title}</h2>
          <h3 className="video__sub-name">{video.channel}</h3>
        </div>
      </button>
        ))}
      </div>
    </>
  );
}

export default Videos;
