import { Carousel } from "react-bootstrap";
import styles from './styles.module.scss'

export function CarouselCont() {
  return (
    <div>
      <Carousel className={styles.carouselCont}>
        <Carousel.Item>
          <img
            className="d-block"
            src="./W1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Spiderman</h3>
            <p>stay on top of the neighborhood friend movies.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src="./W2.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Justice League</h3>
            <p>Join the best DC heroes.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src="./W3.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Harry Potter</h3>
            <p>
            Enter the magical world of Harry Potter!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
