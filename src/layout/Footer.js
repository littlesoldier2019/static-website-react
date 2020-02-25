import React, { Component } from "react";
import Twitter from "./../image/twitter.png";
import Facebook from "./../image/facebook.png";
import Linkedin from "./../image/linkedin.png";
import Github from "./../image/github (1).png";
import Pinterest from "./../image/pinterest.png";
import Vimeo from "./../image/vimeo (2).png";
import Arrow from "./../image/arrow.png";

export class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="container">
          <div className="banner_bottom">
            <div className="banner_text">
              <h3>
                GET IN TOUCH WITH US <span className="italic_bold">NOW !</span>
              </h3>
            </div>

            <div className="banner_btn">
              <button className="btn_getstarted"> CONTACT US </button>
            </div>
          </div>
          <div className="footer_top">
            <div className="footer_top_content">
              <div className="footer_top_item">
                <div className="footer_top_headtext">
                  <h2>
                    {" "}
                    <span>ABOUT US</span>
                  </h2>
                </div>

                <div className="footer_top--text">
                  {" "}
                  <div className="about_wrapper">
                    <span className="normal">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Adipisci magni tenetur nobis velit quasi sequi quod.
                    </span>
                  </div>
                </div>

                <div className="about_wrapper">
                  <span className="normal">
                    <div> 123 street name</div>
                    <div> Road Name </div>
                    <div> London </div>
                    <div> +44 74139 113807 </div>
                  </span>
                </div>
              </div>
            </div>

            <div className="footer_top_content">
              <div className="footer_top_item">
                <div className="footer_top_headtext">
                  <h2>
                    {" "}
                    <span>LATEST TWEETS</span>
                  </h2>
                </div>

                <div className="footer_top--text">
                  {" "}
                  <div className="tweets_wrapper">
                    <span className="footer_top_headtext">@jaynash </span>
                    <span className="normal">
                      submitted another great item on
                    </span>{" "}
                    <span className="footer_top_headtext">#themoforest </span>
                    <span className="normal">about 3 weeks ago</span>
                  </div>
                </div>

                <div className="footer_top--text">
                  {" "}
                  <div className="tweets_wrapper">
                    <span className="footer_top_headtext">@jaynash </span>
                    <span className="normal">
                      submitted another great item on
                    </span>{" "}
                    <span className="footer_top_headtext">#themoforest </span>
                    <span className="normal">about 3 weeks ago </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer_top_content">
              <div className="footer_top_item">
                <div>
                  <h2>
                    <span className="footer_top_headtext">LATEST POST</span>
                  </h2>
                </div>

                <div className="trial">
                  {" "}
                  <span className="normal">
                    <div className="blue">
                      {" "}
                      Lorem ipsum dolor sit amet conse{" "}
                    </div>

                    <div className="blue1">
                      {" "}
                      Lorem ipsum dolor sit amet conse{" "}
                    </div>

                    <div className="blue2">
                      {" "}
                      Lorem ipsum dolor sit amet conse{" "}
                    </div>

                    <div className="blue3">
                      Lorem ipsum dolor sit amet conse{" "}
                    </div>
                  </span>
                </div>
              </div>
            </div>

            <div className="footer_top_content">
              <div className="footer_top_item">
                <h2>
                  <span className="footer_top_headtext">FLICKR</span>
                </h2>

                <div className="footer_first--section">
                  <div className="nested">7</div>
                  <div className="nested">1</div>
                  <div className="nested">1</div>
                  <div className="nested">1</div>
                </div>
                <div className="footer-second--section">
                  <div className="nested">1</div>
                  <div className="nested">1</div>
                  <div className="nested">1</div>
                  <div className="nested">8</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="footer_bottom">
            <div className="bottom_text">
              <span className="normal">
                Copyright © 2019-2031 Stbugyei All rights reserved.
              </span>
            </div>
            <div className="icon_group">
              <div className="bottom_icons">
                <span className="tweeter">Tweeter</span>
                <a href="https://twitter.com/login">
                  <img
                    className="footer_bottom--subimg"
                    src={Twitter}
                    alt=" "
                  />
                </a>
              </div>
              <div className="bottom_icons">
                <div className="facebook">Facebook</div>
                <a href="https://en-gb.facebook.com/login/">
                  <img
                    className="footer_bottom--subimg"
                    src={Facebook}
                    alt=" "
                  />{" "}
                </a>
              </div>

              <div className="bottom_icons">
                <div className="vimeo">vimeo</div>
                <a href="https://vimeo.com/log_in">
                  <img className="footer_bottom--subimg" src={Vimeo} alt=" " />{" "}
                </a>
              </div>

              <div className="bottom_icons">
                <div className="linkedin">Linkedin</div>
                <a href="https://www.linkedin.com/">
                  <img
                    className="footer_bottom--subimg"
                    src={Linkedin}
                    alt=" "
                  />{" "}
                </a>
              </div>

              <div className="bottom_icons">
                <div className="github">Github</div>
                <a href="https://github.com/join">
                  <img className="footer_bottom--subimg" src={Github} alt=" " />{" "}
                </a>
              </div>

              <div className="bottom_icons">
                <div className="pinterest"> Pinterest</div>
                 <a href="https://www.pinterest.com/">
                  <img
                    className="footer_bottom--subimg"
                    src={Pinterest}
                    alt=" "
                  />
                </a>
              </div>
            </div>
            <div className="up_arrow">
              {" "}
              <a href="https://twitter.com/login">
                <img className="footer_bottom--subimg" src={Arrow} alt=" " />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer