import "./index.scss";
import { Link } from "react-router-dom";
import LogoS from "../../images/logo-s.png";
import LogoSubtitle from "../../images/logo_sub.png";

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoS} />
      <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
    </Link>
  </div>
);

export default Sidebar;
