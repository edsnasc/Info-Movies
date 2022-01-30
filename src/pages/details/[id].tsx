import styles from './styles.module.scss';
import { api } from '../../services/api';
import { Card } from "react-bootstrap";
import { GetStaticPaths, GetStaticProps } from 'next';



type DetailsProps = {
  details
}

export default function Details({ details }: DetailsProps) {
  console.log(details.base.title)

  return (
    <div className={styles.containerActors}>
      <h2><u>{details.base.title}</u></h2>
      <div className={styles.ActorPosterContainer}>
        <div key={details.id}>
          <Card className={styles.cardContainer} style={{ width: '80rem', height:'30rem', padding: '0.5rem' }}>
            <div className={styles.CardActor} >
              <Card.Img variant="top" src={details.base.image.url} style={{ width: '18rem', height: '25rem'}}/>
              <Card.Body>
                <Card.Title><h4>About:</h4> <span>{details.base.title}</span></Card.Title>
                <Card.Text>
                  <h4>Sinopse:</h4> <span>{details.plots[0].text}</span>
                  <h4>Year:</h4> <span>{details.base.year}</span>
                </Card.Text>
              </Card.Body>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )

}

export const getStaticPaths: GetStaticPaths = async () => {

  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
   const { id } = ctx.params;

  const { data } = await api.get(`/title/get-plots`, { params: { tconst: `${id}` } })

  const notFound = data ? false : true;

  return {
    props: {
      details: data
    },
    notFound,
  };

}