import "./Services.css";
import img_screen from "../../assets/screen.png";
import img_search from "../../assets/search.png";
const Services = () => {
  return (
    <section>
      <div className="content-wrapper">
        <div className="content ">
          <div className="content-img">
            <img src={img_screen} alt="" className="img-responsive" />
          </div>
          <div className="content-info">
            <h2>Web & Mobile App Development</h2>
            <p>
              Your web and mobile Apps are pieces of the puzzle to grow your
              business. We use frameworks which tailor content and engagement
              methods to respond to different intents shown by your potential
              customers who interact with your business online.
            </p>
            <button>Learn More</button>
          </div>
        </div>
        <div className="content">
          <div className="content-info">
            <h2>Web & Mobile App Development</h2>
            <p>
              Your web and mobile Apps are pieces of the puzzle to grow your
              business. We use frameworks which tailor content and engagement
              methods to respond to different intents shown by your potential
              customers who interact with your business online.
            </p>
            <button>Learn More</button>
          </div>
          <div className="content-img">
            <img src={img_search} alt="" className="img-responsive" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
