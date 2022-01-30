import styles from './styles.module.scss'
import { GetStaticPaths, GetStaticProps } from 'next';
import { api } from '../../services/api';
import { useRouter } from 'next/router';
import { Card } from "react-bootstrap";
import Link  from 'next/link';


type ResultsProps = {
  results
}

export default function Results({results}: ResultsProps) {
  //console.log(results)

  return (
    <div className={styles.resultsContainer}>
      <h2><u>Search result</u></h2>
        <div className={styles.posterContainer}>
          {results.d.map(movie => {
            return (
              <div className={styles.zoom} key={movie.id} style={{ marginRight: '1rem' }}>
                <Card className={styles.cardBody} style={{ width: '16rem', height: '28rem', alignItems: 'center', marginBottom:'1rem'}}>
                  <Card.Img variant="top" src={movie.i?.imageUrl} style={{ width: '95%', height: '20rem' }} />
                  <Card.Body style={{ textAlign: 'center'}}>
                    <Card.Title><Link href={`/details/${movie.id}`}><a>{movie.l}</a></Link></Card.Title>
                    <Card.Text>
                      Year: {movie.y}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            )
          })}
        </div >
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
  const { movie } = ctx.params;
    
  const { data } = await api.get(`/auto-complete`, { params: { q: `${movie}` } })

  const notFound = data ? false : true;
  
  return {
    props: {
      results: data
    },
    notFound,
  };

}