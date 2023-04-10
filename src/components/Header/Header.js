import Logo from "../../assets/Logo/BrainFlix-logo.svg";
import Search from "../../assets/Icons/search.svg";
import Upload from "../../assets/Icons/upload.svg";
import "./Header.scss";

function Header() {
  return (
    <>
      <section className="header">
        <div className="header__container">
          <a className="header__logo" href="">
            <img className="header__logo-image" src={Logo} alt="Brainflix" />
          </a>
        
          <div className="header__search__container">
           
            <form className="header__search">
              
              <input
                className="header__search-bar"
                name="search"
                placeholder="Search"
                autoComplete="off"
              />
            </form>
            <div className="header__search-user--mobile"></div>
          </div>
          <div className="header__bot">
            <button className="header__bot-upload">
              <img
                className="header__bot-upload-image"
                src={Upload}
                alt="Upload"
              />
              UPLOAD
            </button>
            <div className="header__bot-user--tablet"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
