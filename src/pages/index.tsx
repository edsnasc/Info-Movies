import { useRef } from 'react';
import { Card } from "react-bootstrap";
import styles from '../styles/styles.module.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { GetStaticProps } from 'next';
import { api } from './../services/api';
library.add(faChevronRight, faChevronLeft)

type Actors = {
  id: string;
  name: string;
  birthdate: string;
  birthplace: string;
  height: number;
  url: string
}

type MovieProps = {
  movies,
  actordata: Actors[]
}

export default function Home({ movies, actordata }: MovieProps) {
  console.log(actordata)

  const carousel = useRef(null)
  const marvelCarousel = useRef(null)
  const actorCarousel = useRef(null)

  const handleLeftClick = (id) => {
    id.current.scrollLeft -= id.current.offsetWidth;
  };

  const handleRightClick = (id) => {
    id.current.scrollLeft += id.current.offsetWidth;
  };

  return (
    <div className={styles.containerHome}>

      <h2>Recomended</h2>
      <div className={styles.container}>
        <button onClick={() => handleLeftClick(carousel)}>
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
        <button onClick={() => handleRightClick(carousel)}>
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


      <h2>Most popular celebs</h2>
      <div className={styles.containerActors}>
        <button onClick={() => handleLeftClick(actorCarousel)}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div className={styles.ActorPosterContainer} ref={actorCarousel}>
          {actordata.map((actors, index) => {
            return (
              <div key={actors.id} className={styles.zoom}>
                <Card className={styles.cardContainer} style={{ width: '26rem', padding: '0.5rem' }}>
                  <div className={styles.CardActor} >
                    <Card.Img className={styles.img} variant="top" src={actors.url} />
                    <Card.Body>
                      <Card.Title className={styles.title}>{actors.name}</Card.Title>
                      <p>HeightCentimeters: {actors.height}</p>
                      <p>BirthDate: {actors.birthdate}</p>
                      <p>Birthplace: {actors.birthplace}</p>
                    </Card.Body>
                  </div>
                </Card>
              </div>
            )
          })}
        </div>
        <button onClick={() => handleRightClick(actorCarousel)}>
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
    const { data } = await api.get('/auto-complete', { params: { q: item } })
    movies.push(data)
  }

  const { data } = await api.get('/actors/list-most-popular-celebs', { params: { homeCountry: 'US', currentCountry: 'US', purchaseCountry: 'US' } })
  const actorsList = data.slice(6, 12)


  let actors = []
  for (const act of actorsList) {
    const format = act.substring(6, act.length - 1)
    const { data } = await api.get('/actors/get-bio', { params: { nconst: `${format}` } })
    actors.push(data)
  }

  const actordata = actors.map(actors => {
    return {
      id: actors.id,
      name: actors.name,
      birthdate: actors.birthDate,
      birthplace: actors.birthPlace,
      height: actors.heightCentimeters,
      url: actors.image?.url
    };
  })

  return {
    props: {
      movies,
      actordata
    }
  }
}

