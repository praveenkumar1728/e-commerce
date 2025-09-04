import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";


const About = () => {
const testimonials = [
  {
    id: 1,
    leftImg: "assets/images/testimonials/01.png",
    rightImg: "assets/images/testimonials/02.png",
    name: "Andrew D. Smith",
    role: "Manager",
    feedback:
      "According to the council of supply chain professionals the council of logistics management logistics is the process of planning, implementing and controlling procedures",
  },
  {
    id: 2,
    leftImg: "assets/images/testimonials/01.png",
    rightImg: "assets/images/testimonials/02.png",
    name: "Andrew D. Smith",
    role: "Manager",
    feedback:
      "According to the council of supply chain professionals the council of logistics management logistics is the process of planning, implementing and controlling procedures",
  },
  {
    id: 3,
    leftImg: "assets/images/testimonials/01.png",
    rightImg: "assets/images/testimonials/02.png",
    name: "Andrew D. Smith",
    role: "Manager",
    feedback:
      "According to the council of supply chain professionals the council of logistics management logistics is the process of planning, implementing and controlling procedures",
  },
  {
    id: 4,
    leftImg: "assets/images/testimonials/01.png",
    rightImg: "assets/images/testimonials/02.png",
    name: "Andrew D. Smith",
    role: "Manager",
    feedback:
      "According to the council of supply chain professionals the council of logistics management logistics is the process of planning, implementing and controlling procedures",
  },
];
  
  return (
    <>
      <section>
        <div className="rts-contact-main-wrapper-banner bg_image">
          <div className="container">
            <div className="row">
              <div className="co-lg-12">
                <div className="contact-banner-content">
                  <h1 className="title">About Us</h1>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="rts-about-area rts-section-gap2">
          <div className="container-3">
            <div className="row align-items-center">
              <div className="col-lg-4">
                <div className="thumbnail-left">
                  <img src="/assets/images/about/02.jpg" alt="" />
                </div>
              </div>
              <div className="col-lg-8 pl--60 pl_md--10 pt_md--30 pl_sm--10 pt_sm--30">
                <div className="about-content-area-1">
                  <h2 className="title">
                    Your Destination for Quality Produce <br /> and Pantry Essentials
                  </h2>
                  <p className="disc">
                    Venenatis augue consequat class magnis sed purus, euismod ligula nibh congue quis vestibulum nostra, cubilia varius velit vitae rhoncus. Turpis malesuada fringilla urna dui est torquent aliquet, mi nec fermentum placerat nisi venenatis sapien, mattis nunc nullam rutrum feugiat porta. Pharetra mi nisl consequat semper quam litora aenean eros conubia molestie erat, et cursus integer rutrum sollicitudin auctor curae inceptos senectus sagittis est,
                  </p>
                  <div className="check-main-wrapper">
                    <div className="single-check-area">Elementum sociis rhoncus aptent auctor urna justo</div>
                    <div className="single-check-area">Habitasse venenatis gravida nisl, sollicitudin posuere</div>
                    <div className="single-check-area">Uisque cum convallis nostra in sapien nascetur, netus</div>
                    <div className="single-check-area">Class nunc aliquet nulla dis senectus lputate porta</div>
                    <div className="single-check-area">Aenean gravida a est ante nisl nostra dui hendrerit</div>
                    <div className="single-check-area">Bibendum venenatis dignissim non himenaeos eget</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="rts-service-area rts-section-gap2 bg_light-1">
          <div className="container-3">
            <div className="row">
              <div className="col-lg-12">
                <div className="title-center-area-main">
                  <h2 className="title">Why You Choose Us?</h2>
                  <p className="disc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium mollis ex, vel interdum augue faucibus sit amet. Proin tempor purus ac suscipit...
                  </p>
                </div>
              </div>
            </div>

            <div className="row mt--30 g-5">
              <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="single-service-area-style-one">
                  <div className="icon-area">
                    <span className="bg-text">01</span>
                    <img src="assets/images/service/01.svg" alt="service" />
                  </div>
                  <div className="bottom-content">
                    <h3 className="title">Organic Food Services</h3>
                    <p className="disc">
                      When an unknown printer took a galley of type and scrambled it to make follow type specimen area book.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="single-service-area-style-one">
                  <div className="icon-area">
                    <span className="bg-text">02</span>
                    <img src="assets/images/service/02.svg" alt="service" />
                  </div>
                  <div className="bottom-content">
                    <h3 className="title">Organic Food Services</h3>
                    <p className="disc">
                      When an unknown printer took a galley of type and scrambled it to make follow type specimen area book.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="single-service-area-style-one">
                  <div className="icon-area">
                    <span className="bg-text">03</span>
                    <img src="assets/images/service/03.svg" alt="service" />
                  </div>
                  <div className="bottom-content">
                    <h3 className="title">Organic Food Services</h3>
                    <p className="disc">
                      When an unknown printer took a galley of type and scrambled it to make follow type specimen area book.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="rts-cuystomers-feedback-area rts-section-gap2">
      <div className="container-3">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-area-left pl--0">
              <h2 className="title-left mb--0">Customer Feedbacks</h2>
            </div>
          </div>
        </div>

        <div className="row mt--50">
          <div className="col-lg-12">
            <div className="customers-feedback-area-main-wrapper">
              <div className="rts-caregory-area-one">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="category-area-main-wrapper-one">
                      <Swiper
                        spaceBetween={30}
                        slidesPerView={2}
                        loop={true}
                        autoplay={{ delay: 3000 }}
                        className="mySwiper-category-1"
                      >
                        {testimonials.map((item) => (
                          <SwiperSlide key={item.id}>
                            <div className="single-customers-feedback-area">
                              <div className="top-thumbnail-area">
                                <div className="left">
                                  <img src={item.leftImg} alt="client" />
                                  <div className="information">
                                    <h4 className="title">{item.name}</h4>
                                    <span>{item.role}</span>
                                  </div>
                                </div>
                                <div className="right">
                                  <img src={item.rightImg} alt="logo" />
                                </div>
                              </div>
                              <div className="body-content">
                                <p className="disc">“{item.feedback}”</p>
                              </div>
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default About