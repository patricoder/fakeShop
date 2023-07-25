import "./Header.scss";
import logo from "../../assets/logo.png";
import user from "../../assets/user.png";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <img src={logo} className="header__logo" />
        <nav className="header__navigation">
          <NavLink to="/" className="header__link">
            Products
          </NavLink>
          <NavLink to="/cart" className="header__link">
            cart
          </NavLink>
        </nav>
        <div className="header__userBar">
          <img
            src={user}
            className="header__user"
            alt="User icons created by Becris - Flaticon"
          />
          <p className="header__userInfo">No user logged!</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
