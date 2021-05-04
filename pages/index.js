import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Header from '../components/header/index'
import Footer from '../components/footer/index.jsx'

import Contact from '../components/contacts/index.jsx';
import Link from 'next/link';
import Carousel from '../components/carousel/index';
import axios from 'axios'
// import Home from '../pages/home/index'
import cookies from 'next-cookies'
import React ,{useEffect} from "react"
import { withRouter,useRouter } from 'next/router'
import Slide from 'react-reveal/Reveal';
import Homes from './home/index'

import Axios from "axios";
import https from "https";

import * as config from '../config'

// export async function getServerSideProps(ctx) {
//  
	// let data = [], headers = {
		// 'Content-Type': 'application/json',
	//  },
  // 
  // 
	// if (ctx.query.list === 1 || ctx.query.list === '1') // only for page 1
	  // await randomizeOrdering('home');
	// 
	// await axios.get(`https://api.hashtag-ca.com/api/v1/metadata`,
  //  {
	  // headers : headers, params: {
    // page_type:"static",
    // slug:"home"
	  // }
	// }
	// ).then((response) => {
	  // data = response.data;
// 
	// });
	// return {
	  // props: { data, query:ctx.query,}
	// };
  // }

export default function Home(props) {
  let response = props
  const [data, setData] = React.useState(response)
  const router = useRouter();
  // useEffect(() => {
    // console.log("router name",router.pathname)
  //  getData()
  // }, [])
  
    // const getData =()=>{
      // const data={
        // "page_type":["static"],
        // "slug":["home"]
      // }
      // Axios.get("https://api.hashtag-ca.com/api/v1/metadata",{
        // params:{
        // page_type:"static",
        // slug:"home"
      // }}).then((response)=>{
        // console.log({response})
      // })
    // }

  return (
    <div >
       <Homes />
     
    </div>
  )
}
