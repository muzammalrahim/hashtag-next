import '../styles/globals.css'
import '../components/header/style.css';
import './index.css'
import "./about-us/style.css";
import "./contact-us/style.css";
import "../components/contacts/style.css";

import 'bootstrap/dist/css/bootstrap.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
