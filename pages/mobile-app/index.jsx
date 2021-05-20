import React, { Component } from 'react';
import Header from '../../components/header/index.jsx';
import Footer from '../../components/footer/index.jsx';
import Contact from '../../components/contacts/index.jsx';
import DocumentMeta from 'react-document-meta';
import Underconstruction from '../../components/under-construction';

export default class MobileAppPage extends Component {
  render() {
   
    return (
        <div className="contact-main" id="MobieAppBanner">
            <DocumentMeta {...meta} />
            <div className="wp-main" id="wp-main">
                <Header></Header>
            </div>
            <section class="content-container">
                <Underconstruction></Underconstruction>
            </section>
            <Footer></Footer>
        </div>
    )
  }
}
