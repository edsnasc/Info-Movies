import { useRef } from 'react';
import { Card } from "react-bootstrap";
import styles from '../RecomendedList/styles.module.scss'
import { api2 } from '../../services/api';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight, faChevronCircleLeft, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { GetStaticProps } from 'next';
library.add(faChevronCircleRight, faChevronCircleLeft)

type SagaProps = {
  data
}
export function SagaList({ data }: SagaProps ) {

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
          {data.d.map(saga => {
            return (
              <div className={styles.zoom} key={saga.id} style={{ marginRight: '2rem' }}>
                <Card className={styles.cardBody} style={{ width: '16rem', alignItems: 'center' }}>
                  <Card.Img variant="top" src={saga.i?.imageUrl} style={{ width: '95%', height: '20rem' }} />
                  <Card.Body style={{ textAlign: 'center' }}>
                    <Card.Title>{saga.l}</Card.Title>
                    <Card.Text>
                      Year: {saga.y}
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

export const getStaticProps: GetStaticProps = async () => {
  
  const { data } = await api2.get('', {params: { q: 'spiderman'}})

  return {
    props: {
      data,
    }
  }
}

