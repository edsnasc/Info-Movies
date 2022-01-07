import { GetStaticProps } from 'next'
import { Card, Button } from "react-bootstrap";
import { api } from '../services/api'



export default function Home({ movies }) {

    return (
      <div>
        {movies.Search.map(movie => {
          return (
           <div key={movie.imdbID}>
               <Card style={{ width: '16rem', alignItems: 'center' }}>
             <Card.Img variant="top" src={movie.Poster} style={{ width: '95%', height: '20rem' }} />
             <Card.Body style={{ textAlign: 'center' }}>
               <Card.Title>{movie.Title}</Card.Title>
               <Card.Text>
                 Ano: {movie.Year}
               </Card.Text>
               <Button variant="primary">Detalhes</Button>
             </Card.Body>
           </Card>
           </div>
          )
        })}
      </div>
    )  
}



export const getStaticProps: GetStaticProps = async () => {

  const { data } = await api.get('')

  return {
    props: {
      movies: data,
    }
  }
}
