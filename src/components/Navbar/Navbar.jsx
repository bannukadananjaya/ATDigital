import "./Navbar.css";
import img_logo from "../../assets/logo.png";
const Navbar = () => {
  return (
    <nav>
      <div className="wrapper">
      <div className="nav-content">
        <a href="#" className="logo">
          <img src={img_logo} alt="" />
        </a>

        <ul>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Careeres</a>
          </li>
        </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
