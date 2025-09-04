import React from "react";

const Login = () => {
  return (
    <section>
      <div className="rts-register-area rts-section-gap bg_light-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="registration-wrapper-1">
                {/* Logo */}
                <div className="logo-area mb--0">
                  <img
                    className="mb--10"
                    src="assets/images/fav.png"
                    alt="logo"
                  />
                </div>

                {/* Title */}
                <h3 className="title">Login Into Your Account</h3>

                {/* Login Form */}
                <form className="registration-form" action="#">
                  <div className="input-wrapper">
                    <label htmlFor="email">Email*</label>
                    <input type="email" id="email" required />
                  </div>

                  <div className="input-wrapper">
                    <label htmlFor="password">Password*</label>
                    <input type="password" id="password" required />
                  </div>

                  <button type="submit" className="rts-btn btn-primary">
                    Login Account
                  </button>

                  {/* Social Login */}
                  <div className="another-way-to-registration">
                    <div className="registradion-top-text">
                      <span>Or Register With</span>
                    </div>
                    <div className="login-with-brand">
                      <a href="#" className="single">
                        <img
                          src="assets/images/google.svg"
                          alt="google login"
                        />
                      </a>
                      <a href="#" className="single">
                        <img
                          src="assets/images/facebook.svg"
                          alt="facebook login"
                        />
                      </a>
                    </div>
                    <p>
                      Don't have an Account?{" "}
                      <a href="/register">Registration</a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
