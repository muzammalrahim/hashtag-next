import '../styles/globals.css'
import '../styles/Home.module.css'
import '../components/header/style.css';
import '../components/footer/style.css';
import '../components/contacts/style.css';
import '../pages/home/style.css';
import './index.css'
import "./about-us/style.css";
import "./contact-us/style.css";
import "../components/contacts/style.css";
import "../components/carousel/style.css";
import 'bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

import './careers/style.css'
import '../components/contactusPage/style.css'


export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
