import { Carousel } from "react-bootstrap";
import "./Banner.css";
import b1 from "./assets/b1.jpeg";
import b2 from "./assets/b2.jpeg";
import b3 from "./assets/b3.jpeg";

export default function Banner() {
  return (
    <Carousel fade className="banner-carousel" interval={2000}>
      <Carousel.Item>
        <img className="banner-img" src={b1} alt="Slide 1" />
        <Carousel.Caption>
          <h3 className="banner-title">Welcome to Aeternus Energy</h3>
          <p className="banner-para">
            Powering the future with sustainable energy.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="banner-img" src={b2} alt="Slide 2" />
        <Carousel.Caption>
          <h3 className="banner-title">Innovative Solar Solutions</h3>
          <p className="banner-para">
            Providing clean and renewable energy worldwide.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="banner-img" src={b3} alt="Slide 3" />
        <Carousel.Caption>
          <h3 className="banner-title">Join the Green Revolution</h3>
          <p className="banner-para">
            Building a better tomorrow, one panel at a time.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
