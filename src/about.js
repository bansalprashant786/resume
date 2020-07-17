import React from 'react';

const AboutMe = () => {
	return(
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>About</h2>
          <p> I am a Frontend Developer specialized in ReactJs, HTML, CSS & Javascript.
					I have currently 1.5 years of Frontend Development experience building interactive user interface from scratch, Developing the Frontend & integrating APIs. Currently I'm working in Travel Triangle, Gurugram.

					</p>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <img src="assets/img/profile-img.jpg" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <h3> Web Developer.</h3>
            <p className="font-italic">
						Software professional with deep experience in React JS, JavaScript and other leading and emerging
technologies. Extensive knowledge for developing web applications, building great products and solving
client/product problems.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="icofont-rounded-right"></i> <strong>Birthday:</strong> 15 February 1996</li>
                  <li><i className="icofont-rounded-right"></i> <strong>Phone:</strong> +91 7806087034</li>
                  <li><i className="icofont-rounded-right"></i> <strong>City:</strong> City : Gwalior, M.P.</li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="icofont-rounded-right"></i> <strong>Degree:</strong> B.E.</li>
                  <li><i className="icofont-rounded-right"></i> <strong>Email:</strong> bansalprashant786@gmail.com</li>
                  <li><i className="icofont-rounded-right"></i> <strong>Freelance:</strong> Available</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
	);
}

export default AboutMe;
