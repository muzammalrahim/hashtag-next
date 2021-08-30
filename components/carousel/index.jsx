import React, { Component } from "react";
import Slider from "react-slick";
import "lazysizes";
// import a plugin
import "lazysizes/plugins/parent-fit/ls.parent-fit";

export default class Carousel extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    };
    return (
      <Slider {...settings}>
        <div>
          <div className="text-center my-auto d-flex pt-5">
            <img
              data-src="/images/home/html5.svg"
              alt="html5"
              className="img-fluid lazyload  mx-auto my-auto "
            />
          </div>
          <div className="text-center my-auto d-flex pt-5">
            <img
              data-src="/images/home/mysql.svg"
              alt="mysql"
              className="img-fluid lazyload  mx-auto my-auto"
            />
          </div>
          <div className="text-center my-auto d-flex pt-5">
            <img
              data-src="/images/home/amazon.svg"
              alt="amazon"
              className="img-fluid lazyload  mx-auto my-auto"
            />
          </div>
          <div className="text-center my-auto d-flex pt-5">
            <img
              data-src="/images/home/node-js.svg"
              alt="node_js"
              className="img-fluid lazyload  mx-auto my-auto"
            />
          </div>
        </div>

        <div>
          <div className="text-center my-auto d-flex pt-5">
            <img
              data-src="/images/home/bootstrap.svg"
              alt="bootstrap"
              className="img-fluid lazyload  mx-auto my-auto"
            />
          </div>

          <div className="text-center my-auto d-flex pt-5">
            <img
              data-src="/images/home/shopify.svg"
              alt="shopify"
              className="img-fluid lazyload  mx-auto my-auto"
            />
          </div>
          <div className="text-center my-auto d-flex pt-5">
            <img
              data-src="/images/home/php.svg"
              alt="php"
              className="img-fluid lazyload  mx-auto my-auto"
            />
          </div>

          <div className="text-center my-auto d-flex pt-5">
            <img
              data-src="/images/home/angular-js.svg"
              alt="angular_js"
              className="img-fluid lazyload  mx-auto my-auto"
            />
          </div>
        </div>

        <div>
          <div className="text-center my-auto d-flex pt-5">
            <img
              data-src="/images/home/ethereum.svg"
              alt="ethereum"
              className="img-fluid lazyload  mx-auto my-auto"
            />
          </div>
          <div className="text-center my-auto d-flex pt-5">
            <img
              data-src="/images/home/react-js.svg"
              alt="react_js"
              className="img-fluid lazyload  mx-auto my-auto"
            />
          </div>
          <div className="text-center my-auto d-flex pt-5">
            <img
              data-src="/images/home/wordpress.svg"
              alt="wordpress"
              className="img-fluid lazyload  mx-auto my-auto"
            />
          </div>
          <div className="text-center my-auto d-flex pt-5">
            <img
              data-src="/images/home/jquery.svg"
              alt="jquery"
              className="img-fluid lazyload  mx-auto my-auto"
            />
          </div>
        </div>

        <div>
          <div className="text-center my-auto d-flex pt-5">
            <img
              data-src="/images/home/codeigniter.svg"
              alt="codeigniter"
              className="img-fluid lazyload  mx-auto my-auto"
            />
          </div>
          <div className="text-center my-auto d-flex pt-5">
            <img
              data-src="/images/home/django.svg"
              alt="django"
              className="img-fluid lazyload  mx-auto my-auto"
            />
          </div>
          <div className="text-center my-auto d-flex pt-5">
            <img
              data-src="/images/home/python.svg"
              alt="python"
              className="img-fluid lazyload  mx-auto my-auto"
            />
          </div>
          <div className="text-center my-auto d-flex pt-5">
            <img
              data-src="/images/home/mongodb.svg"
              alt="mongodb"
              className="img-fluid lazyload  mx-auto my-auto"
            />
          </div>
        </div>

        <div>
          <div className="text-center my-auto d-flex pt-5">
            <img
              data-src="/images/home/truffle.svg"
              alt="truffle"
              className="img-fluid lazyload  mx-auto my-auto"
            />
          </div>
          <div className="text-center my-auto d-flex pt-5">
            <img
              data-src="/images/home/solidity.svg"
              alt="solidity"
              className="img-fluid lazyload  mx-auto my-auto"
            />
          </div>
          <div className="text-center my-auto d-flex pt-5">
            <img
              data-src="/images/home/docker.svg"
              alt="docker"
              className="img-fluid lazyload  mx-auto my-auto"
            />
          </div>
          <div className="text-center my-auto d-flex pt-5">
            <img
              data-src="/images/home/ionic.svg"
              alt="ionic"
              className="img-fluid lazyload  mx-auto my-auto"
            />
          </div>
        </div>
      </Slider>
    );
  }
}
