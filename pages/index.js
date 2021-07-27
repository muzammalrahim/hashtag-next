import React from "react"
import Homes from './home/index'

import Axios from "axios";
import https from "https";

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
  return (
 
       <Homes title={data.title}
	   	  description={data.description}
		  keywords={data.keywords}
		  canonical={data?.canonical_tags}
	   />
	  
  )
}
