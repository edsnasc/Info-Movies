import { useRef } from 'react';
import { Card } from "react-bootstrap";
import styles from '../RecomendedList/styles.module.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight, faChevronCircleLeft, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
library.add(faChevronCircleRight, faChevronCircleLeft)

type RecomendedProps = {
  movies,
}

export function RecomendedList({ movies }: RecomendedProps ) {

  const carousel = useRef(null)

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };


  return (
    <div className={styles.titleContainer}>
      <h2>Recomended</h2>
      <div className={styles.container}>
        <button onClick={handleLeftClick}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div className={styles.posterContainer} ref={carousel}>
          {movies.d.map(movie => {
            return (
              <div className={styles.zoom} key={movie.id} style={{ marginRight: '2rem' }}>
                <Card className={styles.cardBody} style={{ width: '16rem', alignItems: 'center' }}>
                  <Card.Img variant="top" src={movie.i?.imageUrl} style={{ width: '95%', height: '20rem' }} />
                  <Card.Body style={{ textAlign: 'center' }}>
                    <Card.Title>{movie.l}</Card.Title>
                    <Card.Text>
                      Year: {movie.y}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            )
          })}
        </div >
        <button onClick={handleRightClick}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  )
}

