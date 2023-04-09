import "./Hero.scss";

function Hero(props) {
 
  return (
    <>
      <section className="hero">
        <video className="hero__video" controls poster={props.video.image}>
          <source src={props.video.video} />
        </video>
      
      </section>
    </>
  );
}

export default Hero;
