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
            <p>
              For the first time in Spider-Man cinematic history, our friendly neighborhood hero is unmasked and can no longer 
              separate his normal life from the great risks of being a superhero.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src="./W2.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>The Witcher</h3>
            <p>
              In The Witcher, a Netflix original series, Geralt of Rivia (Henry Cavill) is a lonely monster hunter, struggling to find his 
              place in a world where people are crueler than creatures. But his path will cross with two figures that will change his life: 
              the sorceress Yennefer of Vengerberg (Anya Chalotra) and the powerful princess Cintran Ciri (Freya Allan). The plot follows the 
              three of them through different timelines until finally their lives are connected when they join in the Battle of Sodden Hill 
              against the invaders of Nilfgaard.
            </p>
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
              Harry Potter is an orphan boy who lives unhappily with his uncles, the Dursleys. He receives a letter containing an invitation
              to join Hogwarts, a famous school specializing in training young wizards. Initially, Harry is prevented from reading the letter
              by his uncle, but he is soon visited by Hagrid, the Hogwarts gamekeeper, who arrives to take him to the school. Harry enters a
              magical world he never imagined, living several adventures with his new friends, Ron Weasley and Hermione Granger.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
