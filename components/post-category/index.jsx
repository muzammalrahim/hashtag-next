import React, { Component } from 'react';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import $ from 'jquery';
import axios from 'axios';
import * as config from '../../config';
import Link from 'next/link'
import { withRouter } from "next/router";

require('typeface-montserrat')


class BlogCategories extends Component {


  constructor(props) {
    super(props);

    this.state = {
      categories: []
    };

  }

  componentDidMount() {
    this.get_categories();
  }

  //Get recent posts
  get_categories(){
    axios.get(config.myConfig.apiUrl+'blog/categories')
    .then((response) => {
      const categories = response.data.data;
      this.setState({ 
        categories: categories
      })
    }).catch(error =>{
      toast.error("Something went wrong.");
    });
  }

  navigate = (id) => {
  this.props.router.push({
    pathname: id,
    // query: { id }
  });
  }
  render() {

    return (
   
      <div id="categories-3" className="widget widget_categories posts_holder">
        <h4 className="title-level-6 text-left title-level-mobile b-categories">Categories</h4>    
        <ul>
          {this.state.categories.map((cat, index) => { 
            return (
              <li className="cat-item cat-item-51 current-cat" key={index}>
                <a
                  href={"/blogs/category/" + cat.slug}
                >
                  {cat.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

    )
  }
}

export default withRouter(BlogCategories)