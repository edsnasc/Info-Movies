import { useRef } from 'react';
import { Card } from "react-bootstrap";
import styles from '../styles/styles.module.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import { GetStaticProps } from 'next';
import { api } from './../services/api';
library.add(faChevronRight, faChevronLeft)

type MovieProps = {
  movies
}

export default function Home({ movies }: MovieProps ) {
  //console.log(movies)

  const carousel = useRef(null)
  const marvelCarousel = useRef(null)

  const handleLeftClick = (id) => {
    id.current.scrollLeft -= id.current.offsetWidth;
  };

  const handleRightClick = (id) => {
    id.current.scrollLeft += id.current.offsetWidth;
  };

  return (
    <div className={styles.titleContainer}>
      <h2>Recomended</h2>
      <div className={styles.container}>
        <button onClick={() => handleRightClick(carousel)}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div className={styles.posterContainer} ref={carousel}>
          {movies[1].d.map(movie => {
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
        <button onClick={() => handleLeftClick(carousel)}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      <h2>Spider-man special list</h2>
      <div className={styles.container}>
        <button onClick={() => handleLeftClick(marvelCarousel)}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div className={styles.posterContainer} ref={marvelCarousel}>
          {movies[0].d.map(movie => {
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
        <button onClick={() => handleRightClick(marvelCarousel)}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const param = ['spiderman', 'y:2021']
  var movies = []

  for (const item of param) {
    const { data } = await api.get('', {params: { q: item}})
    movies.push(data)
  }

  return {
    props: {
      movies,
    }
  }
}

