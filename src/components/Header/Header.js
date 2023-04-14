import Logo from "../../assets/Logo/BrainFlix-logo.svg";
import Search from "../../assets/Icons/search.svg";
import Upload from "../../assets/Icons/upload.svg";
import "./Header.scss";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <section className="header">
        <div className="header__container">
          <NavLink className="header__logo" to="/">
            <img className="header__logo-image" src={Logo} alt="Brainflix" />
          </NavLink>

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
            
            <NavLink to="/Upload" className="header__bot-upload">
              <img
                className="header__bot-upload-image"
                src={Upload}
                alt="Upload"
              />
              UPLOAD
            </NavLink>
            
            <div className="header__bot-user--tablet"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
