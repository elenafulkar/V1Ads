import React from "react";
import { HomePageText } from "./data";
import Slideshow from "../../components/Slideshow";
import "./style.css";
import  aboutus  from "../../assets/Images/about-us.jpg";
import  test  from "../../assets/Images/test.jpg";


import {
  AiOutlineRocket,
  AiOutlineRise,
  AiOutlineMail,
  AiOutlineNotification,
  AiOutlineFileSearch,
  AiOutlineTeam,
  AiOutlineSync,
  AiOutlineFundView,
  AiOutlineProject,
} from "react-icons/ai";

function Home({ header, subheader, subheader1 }) {
  return (
    <div>
      <section>
        <Slideshow />
        <div className="container">
          <div className="header-section mt-5 pt-5">
            <h6>{HomePageText.subheader1}</h6>
            <h1>{HomePageText.header}</h1>
            <p>{HomePageText.subheader}</p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-6">
              <div className="services-box">
                <AiOutlineRise className="icon1" />
                <h4>{HomePageText.services_title1}</h4>
                <p>{HomePageText.services_subheading}</p>
                {/* <button className="btn learn-more-btn">Learn More</button> */}
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-6">
              <div className="services-box">
                <AiOutlineRocket className="icon2" />
                <h4>{HomePageText.services_title2}</h4>
                <p>{HomePageText.services_subheading2}</p>
                {/* <button className="btn learn-more-btn">Learn More</button> */}
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-6">
              <div className="services-box">
                <AiOutlineMail className="icon3" />
                <h4>{HomePageText.services_title3}</h4>
                <p>{HomePageText.services_subheading3}</p>
                {/* <button className="btn learn-more-btn">Learn More</button> */}
              </div>
            </div>
          </div>
        </div>

        {/* Header 2  about */}
        <div className="abouthome">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12 pt-5">
                <img src={aboutus} className="img-fluid mt-5 pt-5" alt="aboutus" />
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="abouthome">
                  <h6 className="mt-3">{HomePageText.about_subheader}</h6>
                  <h4 className="mt-3">{HomePageText.about_header}</h4>
                  <p className="mt-3 text-justify">{HomePageText.about_des1}</p>
                  <p className="text-justify">{HomePageText.about_des2}</p>

                  {/* <button className="btn readmore mt-3">Read More</button> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Header 3 services */}
        <div className="serviceshome">
          <div className="container">
            <div className="servicesheader">
              <h6>{HomePageText.serviceshome_subheader}</h6>
              <h4>{HomePageText.serviceshome_header}</h4>
              <p>{HomePageText.serviceshome_subheader1}</p>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-6">
                <div className="services-box-home m-3">
                  <AiOutlineNotification className="icon1" />
                  <h4>{HomePageText.services_box_title1}</h4>
                  <p>{HomePageText.services_box_des}</p>
                  {/* <button className="btn learn-more-btn">Learn More</button> */}
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-6">
                <div className="services-box-home m-3">
                  <AiOutlineFundView className="icon2" />
                  <h4>{HomePageText.services_box_title2}</h4>
                  <p>{HomePageText.services_box_des2}</p>
                  {/* <button className="btn learn-more-btn">Learn More</button> */}
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-6">
                <div className="services-box-home m-3">
                  <AiOutlineFileSearch className="icon3" />
                  <h4>{HomePageText.services_box_title3}</h4>
                  <p>{HomePageText.services_box_des3}</p>
                  {/* <button className="btn learn-more-btn">Learn More</button> */}
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-6">
                <div className="services-box-home m-3">
                  <AiOutlineTeam className="icon3" />
                  <h4>{HomePageText.services_box_title4}</h4>
                  <p>{HomePageText.services_box_des4}</p>
                  {/* <button className="btn learn-more-btn">Learn More</button> */}
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-6">
                <div className="services-box-home m-3">
                  <AiOutlineProject className="icon2" />
                  <h4>{HomePageText.services_box_title5}</h4>
                  <p>{HomePageText.services_box_des5}</p>
                  {/* <button className="btn learn-more-btn">Learn More</button> */}
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-6">
                <div className="services-box-home m-3">
                  <AiOutlineSync className="icon1" />
                  <h4>{HomePageText.services_box_title6}</h4>
                  <p>{HomePageText.services_box_des6}</p>
                  {/* <button className="btn learn-more-btn">Learn More</button> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Header 4 test */}
        <div className="home-test">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="">
                  <h6>TESTIMONIALS</h6>
                  <h4>What Our Clients Are Saying?</h4>
                  <p>
                    Our experience with V1Ads has been nothing short of exceptional. From boosting our online visibility to driving measurable engagement through targeted campaigns, their strategic approach has delivered impressive results. The team consistently provides creative solutions, insightful analytics, and timely execution that align perfectly with our business goals. We've seen a significant increase in website traffic, lead generation, and overall brand presence since partnering with them.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12 pt-5">
                <img src={test} className="img-fluid" alt="test" />
              </div>
            </div>
          </div>
        </div>

        {/* Header 5 team */}
        {/* <div className="hometeam">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-6">
                <div className="hometeamheader">
                  <h6>OUR TEAM</h6>
                  <h4>We Help to Acheive Your Business Goal</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>
                  <button className="btn learn-more-btn">View All</button>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <div className="hometeam-box">
                  <div class="our-team">
                    <div class="pic">
                      <img src={team1} />
                    </div>
                    <div class="team-content">
                      <h3 class="title">MARTIN SMITH</h3>
                      <span class="post">Founder & CEO</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-6">
                <div className="hometeam-box">
                <div class="our-team">
                    <div class="pic">
                      <img src={team2} />
                    </div>
                    <div class="team-content">
                      <h3 class="title">Olivia</h3>
                      <span class="post">Marketing Lead</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-6">
                <div className="hometeam-box">
                <div class="our-team">
                    <div class="pic">
                      <img src={team3} />
                    </div>
                    <div class="team-content">
                      <h3 class="title">FRANKLIN HARBET</h3>
                      <span class="post">Web Designer</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-3 col-md-4 col-6">
                <div className="hometeam-box">
                <div class="our-team">
                    <div class="pic">
                      <img src={team4} />
                    </div>
                    <div class="team-content">
                      <h3 class="title">Miranda joy</h3>
                      <span class="post">Web Developer</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-3 col-md-4 col-6">
                <div className="hometeam-box">
                <div class="our-team">
                    <div class="pic">
                      <img src={team5} />
                    </div>
                    <div class="team-content">
                      <h3 class="title">LINDA ANDERSON</h3>
                      <span class="post">Support</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-3 col-md-4 col-6">
                <div className="hometeam-box">
                <div class="our-team">
                    <div class="pic">
                      <img src={team6} />
                    </div>
                    <div class="team-content">
                      <h3 class="title">KRISTIANA</h3>
                      <span class="post">Support</span>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div> */}

        {/* header 6 price */}
        {/* <div className="homeprice">
          <div className="container">
            <div className="">
              <h6>PRICING</h6>
              <h4>Our Flexible Pricing Plan</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </p>
            </div>
            <div className="row mt-5">
              <div className="col-lg-4 col-md-4 col-6">
                <div className="homeprice-box">
                  <AiOutlineSend className="icon1" />
                  <div className="homeprice-header">
                    <h3> Starter Plan</h3>
                  </div>
                  <div className="homeprice-list">
                    <ul>
                      <li>10GB Bandwidth Internet</li>
                      <li>Business & Financ Analysing</li>
                      <li>25 Social Media Reviews</li>
                      <li>Customer Managemet</li>
                      <li>24/7 Support</li>
                    </ul>
                  </div>
                  <div className="homeprice-price">
                    $20.99
                    <span>Per Month</span>
                  </div>
                  <button className="btn learn-more-btn">Book Now</button>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-6">
                <div className="homeprice-box">
                  <AiOutlineBlock className="icon2" />
                  <div className="homeprice-header">
                    <h3> Advance Plan</h3>
                  </div>
                  <div className="homeprice-list">
                    <ul>
                      <li>30GB Bandwidth Internet</li>
                      <li>Business & Financ Analysing</li>
                      <li>30 Social Media Reviews</li>
                      <li>Customer Managemet</li>
                      <li>24/7 Support</li>
                    </ul>
                  </div>
                  <div className="homeprice-price">
                    $25.99
                    <span>Per Month</span>
                  </div>
                  <button className="btn learn-more-btn">Book Now</button>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-6">
                <div className="homeprice-box">
                  <AiOutlineSketch className="icon3" />
                  <div className="homeprice-header">
                    <h3> Premium Plan</h3>
                  </div>
                  <div className="homeprice-list">
                    <ul>
                      <li>50GB Bandwidth Internet</li>
                      <li>Business & Financ Analysing</li>
                      <li>35 Social Media Reviews</li>
                      <li>Customer Managemet</li>
                      <li>24/7 Support</li>
                    </ul>
                  </div>
                  <div className="homeprice-price">
                    $30.99
                    <span>Per Month</span>
                  </div>
                  <button className="btn learn-more-btn">Book Now</button>
                </div>
              </div>
            </div>
          </div>

         
        </div> */}
      </section>
    </div>
  );
}

export default Home;
