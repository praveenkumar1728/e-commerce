import React from 'react'

const Contact = () => {
  return (
    <>
      <section>
        <div className="rts-contact-main-wrapper-banner bg_image">
          <div className="container">
            <div className="row">
              <div className="co-lg-12">
                <div className="contact-banner-content">
                  <h1 className="title">Contact Us</h1>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="rts-map-contact-area rts-section-gap2">
          <div className="container">
            <div className="row">
              {/* Left side contact details */}
              <div className="col-lg-4">
                <div className="contact-left-area-main-wrapper">
                  <h2 className="title">You can ask us questions !</h2>
                  <p className="disc">
                    Contact us for all your questions and opinions, or you can
                    solve your problems in a shorter time with our contact
                    offices.
                  </p>

                  {/* Berlin Store */}
                  <div className="location-single-card">
                    <div className="icon">
                      <i className="fa fa-location-dot"></i>
                    </div>
                    <div className="information">
                      <h3 className="title">Berlin Germany Store</h3>
                      <p>Coimbatore, Tamil Nadu.</p>
                      <a href="tel:+1234567890" className="number">
                        +1234567890
                      </a>
                      <a href="mailto:info@example.com" className="email">
                        info@example.com
                      </a>
                    </div>
                  </div>

                  {/* Frankfurt Store */}
                  <div className="location-single-card">
                    <div className="icon">
                      <i className="fa fa-location-dot"></i>
                    </div>
                    <div className="information">
                      <h3 className="title">Frankfurt Germany Store</h3>
                      <p>259 Daniel Road, FKT 2589 Berlin, Germany.</p>
                      <a href="tel:+856762596328" className="number">
                        +856 (76) 259 6328
                      </a>
                      <a href="mailto:info@example.com" className="email">
                        info@example.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side map */}
              <div className="col-lg-8 pl--50 pl_sm--5 pl_md--5">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15665.12005580181!2d76.95710775962036!3d11.017605188631316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85855910aed83%3A0x80875de5cd370a9d!2sGandhipuram%2C%20Tamil%20Nadu%20641012%2C%20India!5e0!3m2!1sen!2sbd!4v1757025027074!5m2!1sen!2sbd"
                  width="600"
                  height="540"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="rts-contact-form-area rts-section-gapBottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="bg_light-1 contact-form-wrapper-bg">
                  <div className="row">
                    {/* Left Side - Form */}
                    <div className="col-lg-7 pr--30 pr_md--10 pr_sm--5">
                      <div className="contact-form-wrapper-1">
                        <h3 className="title mb--50">
                          Fill Up The Form If You Have Any Question
                        </h3>
                        <form className="contact-form-1" action="#">
                          <div className="contact-form-wrapper--half-area">
                            <div className="single">
                              <input type="text" placeholder="Name*" required />
                            </div>
                            <div className="single">
                              <input type="email" placeholder="Email*" required />
                            </div>
                          </div>

                          <div className="single-select">
                            <select defaultValue="">
                              <option value="" disabled>
                                Subject*
                              </option>
                              <option value="1">Some option</option>
                              <option value="2">Another option</option>
                              <option value="3">Potato</option>
                            </select>
                          </div>

                          <textarea
                            name="message"
                            placeholder="Write Message Here"
                            required
                          ></textarea>

                          <button
                            type="submit"
                            className="rts-btn btn-primary mt--20"
                          >
                            Send Message
                          </button>
                        </form>
                      </div>
                    </div>

                    {/* Right Side - Thumbnail */}
                    <div className="col-lg-5 mt_md--30 mt_sm--30">
                      <div className="thumbnail-area">
                        <img
                          src="assets/images/contact.jpg"
                          alt="contact_form"
                        />
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

export default Contact