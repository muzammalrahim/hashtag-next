import React, { Component } from 'react';
// import './style.css';
import Header from '../../components/header/index.jsx';
import Footer from '../../components/footer/index.jsx';
import Contact from '../../components/contacts/index.jsx';
import DocumentMeta from 'react-document-meta';
import Underconstruction from '../../components/under-construction';

export default class AwsPage extends Component {
  render() {
    const meta = {
        title: 'AWS - FullStack Web Development| Bay area, California',


        meta: {
            charset: 'utf-8',
            name: {
                keywords: 'Web development company,software development company,web development kochi,web development company kochi,software development kochi,web development company kochi,software development kochi,web design and development kochi,full stack development company,wordpress customisation company kerala,shopify theme development company kerala,ecommerce development company kerala,woocommerce development company kerala,web development company California,software development california,wordpress development california,wordpress development kochi,shopify development kochi,shopify development california,wordpress customisation company,shopify theme development company,ecommerce development company kochi,ecommerce development company california'
            }


        }
    };
    return (
        <div className="contact-main" id="AwsBanner">
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
