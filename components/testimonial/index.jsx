import React, { Component } from 'react';
{/*import $ from 'jquery'; */ }
export default class Testimonial extends Component {

  constructor(props) {
    super(props);
    if (typeof window === "undefined") {
      global.window = {};
    }
  }
  componentDidMount() {

    var testim = document.getElementById("testim"),
      testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
      testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
      testimLeftArrow = document.getElementById("left-arrow"),
      testimRightArrow = document.getElementById("right-arrow"),
      testimSpeed = 4500,
      currentSlide = 0,
      currentActive = 0,
      testimTimer,
      touchStartPos,
      touchEndPos,
      touchPosDiff,
      ignoreTouch = 30;
    ;
    if (typeof window !== undefined) {
      window.onload = function () {

        // Testim Script
        function playSlide(slide) {
          for (var k = 0; k < testimDots.length; k++) {
            testimContent[k].classList.remove("active");
            testimContent[k].classList.remove("inactive");
            testimDots[k].classList.remove("active");
          }

          if (slide < 0) {
            slide = currentSlide = testimContent.length - 1;
          }

          if (slide > testimContent.length - 1) {
            slide = currentSlide = 0;
          }

          if (currentActive != currentSlide) {
            testimContent[currentActive].classList.add("inactive");
          }
          testimContent[slide].classList.add("active");
          testimDots[slide].classList.add("active");

          currentActive = currentSlide;

          clearTimeout(testimTimer);
          testimTimer = setTimeout(function () {
            playSlide(currentSlide += 1);
          }, testimSpeed)
        }

        testimLeftArrow.addEventListener("click", function () {
          playSlide(currentSlide -= 1);
        })

        testimRightArrow.addEventListener("click", function () {
          playSlide(currentSlide += 1);
        })

        for (var l = 0; l < testimDots.length; l++) {
          testimDots[l].addEventListener("click", function () {
            playSlide(currentSlide = testimDots.indexOf(this));
          })
        }

        playSlide(currentSlide);

        // keyboard shortcuts
        document.addEventListener("keyup", function (e) {
          switch (e.keyCode) {
            case 37:
              testimLeftArrow.click();
              break;

            case 39:
              testimRightArrow.click();
              break;

            case 39:
              testimRightArrow.click();
              break;

            default:
              break;
          }
        })

        testim.addEventListener("touchstart", function (e) {
          touchStartPos = e.changedTouches[0].clientX;
        })

        testim.addEventListener("touchend", function (e) {
          touchEndPos = e.changedTouches[0].clientX;

          touchPosDiff = touchStartPos - touchEndPos;

          // console.log(touchPosDiff);
          // console.log(touchStartPos);    
          // console.log(touchEndPos);    


          if (touchPosDiff > 0 + ignoreTouch) {
            testimLeftArrow.click();
          } else if (touchPosDiff < 0 - ignoreTouch) {
            testimRightArrow.click();
          } else {
            return;
          }

        })
      }
    }
  }

  render() {

    return (

      <section id="testim" className="testim  testimonial_main">
        {/*         <div class="testim-cover"> */}
        <div className="wrap">
          <span id="right-arrow" className="arrow right fa fa-chevron-right" />
          <span id="left-arrow" className="arrow left fa fa-chevron-left " />
          <ul id="testim-dots" className="dots">
            <li className="dot active" />{/*
                    */}<li className="dot" />{/*
                    */}<li className="dot" />{/*
                    */}<li className="dot" />{/*
                    */}<li className="dot" />
          </ul>
          <div id="testim-content" className="cont">
            <div className="active">
              <p> <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span> </p>
              <p>Ultimately, the team knows what each one is best at and does it effectively without any hiccups.</p>

              <p className="testimonialHead">Macey deQuay</p>
        
              <p className="testi-position">VP of Production, New Media Agency Inc</p>
              <div className="img"><img src="../images/wordpress/clutch.svg" alt="clutch" /></div>


            </div>
            <div>
              <p> <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span> </p>
              <p>When we first met, I don't know how much business he had, but he didn't make me feel like I wasn't important.<br /></p>

              <p className="testimonialHead">Chris Brazelton</p>
              <p className="testi-position">CEO, BMG Basketball Academy</p>
              <div className="img"><img src="../images/wordpress/clutch.svg" alt="clutch" /></div>
            </div>
            <div>
              <p> <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span> </p>
              <p>They’re definitely a group that takes direction and performs accordingly</p>
              <br />
              <p className="testimonialHead">Michael Barnett</p>
              <p className="testi-position">Founder, UpperDeck Consulting</p>

              <div className="img"><img src="../images/wordpress/clutch.svg" alt="clutch" /></div>
            </div>
            <div>
              <p> <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span> </p>
              <p>I don't know much about web design so I trust them to suggest, create, and define everything.</p>

              <p className="testimonialHead">Abin Mathew</p>
              <p className="testi-position">CEO, appOnstream</p>
              <div className="img"><img src="../images/wordpress/clutch.svg" alt="clutch" /></div>
            </div>
            <div>
              <p> <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span> </p>
              <p>Every single person I've worked with from Hashtag Systems is very dedicated, hardworking, and ethical.</p>

              <p className="testimonialHead">Brandy Cooper</p>
              <p className="testi-position">Owner, Mint Design Agency</p>
              <div className="img"><img src="../images/wordpress/clutch.svg" alt="clutch" /></div>
            </div>

          </div>
        </div>
        {/*         </div> */}
      </section>


    )
  }
}