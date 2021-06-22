import React, { Component } from 'react';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import $ from 'jquery';
import axios from 'axios';
import * as config from '../../config.js';
import a from 'next/link'

require('typeface-montserrat')

export default class BlogRecentPosts extends Component {


  constructor(props) {
    super(props);

    this.state = {
      recentPosts: []
    };

  }

  componentDidMount() {
    this.get_recentPosts();
  }


  //Get recent posts
  get_recentPosts(){
    var category;
    if(this.props.category != undefined){
      category = this.props.category;
    } else {
      category = '';
    }
    axios.get(config.myConfig.apiUrl+'blog/posts/recent', {params: {category: category}})
    .then((response) => {
      // console.log(response.data);
      const recentPosts = response.data.data.posts;
      this.setState({ 
        recentPosts: recentPosts
      })
    }).catch(error =>{
      toast.error("Something went wrong.");
    });
  }




  render() {
    return (
      <div id="recent-posts-4" className="widget widget_recent_entries posts_holder">    
        <h3 className="title-level-6 title-level-mobile text-left b-recent-posts">Recent Posts</h3>    
        <ul>
          {this.state.recentPosts.map((post, index) => { 
            return(
              <li key={index}>
                <a href={"/blogs/"+post.url}>{post.title}</a>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
