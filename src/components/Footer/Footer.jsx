import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        <div className="footer-content">
          <div className="footer-row">
            <div className="footer-box-1">
              <img src="./logo.png" alt="" />
              <p>
                Your goal is our target. Not anything in between. We use online
                marketing platforms and tools to achieve single objective - your
                business results.
              </p>
            </div>

            <div className="footer-box-2">
              <div className="footer-box-2-content">
                <h1>Our Technologies</h1>
                <ul>
                  <li>
                    <a href="#">ReactJs</a>
                  </li>
                  <li>
                    <a href="#">Gatsby</a>
                  </li>
                  <li>
                    <a href="#">NextJS</a>
                  </li>
                  <li>
                    <a href="#">NodeJS</a>
                  </li>
                  <li>
                    <a href="#">GraphQL</a>
                  </li>
                  <li>
                    <a href="#">Laravel</a>
                  </li>
                </ul>
              </div>
              <div className="footer-box-2-content">
                <h1>Our Services</h1>
                <ul>
                  <li>
                    <a href="">Social media Marketing</a>
                  </li>
                  <li>
                    <a href="">Web & Mobile App Development</a>
                  </li>
                  <li>
                    <a href="">Data & Analysis</a>
                  </li>
                  <li>
                    <a href="">Google Marketing Solutions</a>
                  </li>
                  <li>
                    <a href="">Search Engine Optimization</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-row">
            <p className="auth-text">Privacy Policy | Terms and Conditions </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
