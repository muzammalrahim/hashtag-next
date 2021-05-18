import Head from 'next/head'
import React ,{useEffect} from "react"
import { withRouter,useRouter } from 'next/router'
import Image from 'next/image'

import 'font-awesome/css/font-awesome.min.css';
// import styles from '../styles/Home.module.css'
import Header from '../components/header/index'
import Footer from '../components/footer/index.jsx'

import Contact from '../components/contacts/index.jsx';
import Link from 'next/link';
import Carousel from '../components/carousel/index';
import axios from 'axios'
// import Home from '../pages/home/index'
import Slide from 'react-reveal/Reveal';
import Homes from './home/index'

import Axios from "axios";
import https from "https";

import * as config from '../config'

export async function getServerSideProps() {

	let data = [];
  
	const instance = Axios.create({
	  httpsAgent: new https.Agent({
		rejectUnauthorized: false,
	  }),
	});
  
	await instance
	  .get("https://api.hashtag-ca.com/api/v1/metadata", {
		params: {
		  page_type: "static",
		  slug: "home",
		},
	  })
	  .then((response) => {
		data = response.data;
	  });
	return {
	  props: { data },
	};
  }

export default function Home(props) {
  let response = props
  const [data, setData] = React.useState(response.data.data)
  const router = useRouter();
  
    
  return (
 
       <Homes title={data.title}
	   description={data.description}
	   keywords={data.keywords}
	   />
	  
  )
}
