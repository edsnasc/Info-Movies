import { Header } from '../components/Header'
import {CarouselCont} from '../components/CarouselCont'
import { Footer } from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/global.scss'


function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header/>
      <CarouselCont/>
      <Component {...pageProps} />
      <Footer/>
    </div>
  )}

export default MyApp
