import React, { Component } from 'react';
import Header from '../components/header/index.jsx';
import Footer from '../components/footer/index.jsx';


require('typeface-montserrat')

export default class ErrorPage extends Component {
  render() {
    return (
   
<div className="error-main" id="error-main">
        
            <Header></Header>
            <section class="content-container">
              <div className="container-fluid p-0 m-0 ">
                    
                      <div className="container">
                         
                          
                          <div className="row h-100 error-content">
                              <div className="col-sm-12 my-auto">
                                  <h2 className="main-title  title-orange">404</h2>
                                  <h2 className="title-black">WE ARE SORRY!</h2>
                                   <p className="sub-text-above-main-title">Nothing found.</p>
                              </div>
                          </div>
                      </div>
               </div>
              </section>        
            <Footer></Footer>
</div>

    )
  }
}
