import { Header } from '../components/Header'
import {CarouselCont} from '../components/CarouselCont'
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/global.scss'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header/>
      <CarouselCont/>
      <Component {...pageProps} />
    </div>
  )}

export default MyApp
