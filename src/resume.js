import React from 'react';

const Resume = () => {
	return (
    <section id="resume" className="resume">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Resume</h2>
          <p>Software professional with deep experience in React JS, JavaScript and other leading and emerging
						technologies. Extensive knowledge for developing web applications, building great products and solving
						client/product problems.
					</p>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Sumary</h3>
            <div className="resume-item pb-0">
              <h4>Prashant Bansal</h4>
              <p><em>Innovative and deadline-driven FrontEnd Developer with currently 1.5 years of building interactive user interface from scratch.</em></p>
              <ul>
                <li>Lalitpur colony,Gwalior, M.P.</li>
                <li>+91 7806087034</li>
                <li>bansalprashant786@gmail.com</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>BACHELOR OF ENGINEERING, COMPUTER SCIENCE ENGINEERING</h4>
              <h5>2014 - 2018</h5>
              <p><em>Rajiv Gandhi Proudyogiki Vishwavidyalaya,Bhopal</em></p>
              <p>I have completed my 4 year graduation degree in computer science with overall CGPA 6.93.</p>
            </div>
            <div className="resume-item">
              <h4>SENIOR EDUCATION (12TH), State Board</h4>
              <h5>2012 - 2013</h5>
              <p><em>Dr. B.R. Ambedkar H.S. School - Morena, M.P</em></p>
              <p>I have completed my 12th from state board(M.P.) board with overall 72.6%.</p>
            </div>
						<div className="resume-item">
              <h4>SECONDARY EDUCATION (10TH), CBSE</h4>
              <h5>2010 - 2011</h5>
              <p><em>Dr. B.R. Ambedkar H.S. School - Morena, M.P</em></p>
              <p>I have completed my 10th from state board(M.P.) board with overall 75%.</p>
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Software Engineer</h4>
              <h5>Jan 2020 - Present</h5>
              <p><em>Travel Triangle, GuruGram, Haryana </em></p>
              <ul>
                <li>Developed Dynamic and interactive website that ensured high traffic, page views, and user experience.</li>
                <li>Developed Reusable component so that complexity will be less. </li>
                <li>Produced websites compatible with multiple browsers.</li>
                <li>Designed and updated layouts to meet usability and performance requirements.</li>
								<li>Developed designs to meet specific requirements such as quick-loading sites with particular layouts.</li>
							</ul>
            </div>
            <div className="resume-item">
              <h4>Software Developer</h4>
              <h5>Mar 2019 - Dec 2019</h5>
              <p><em>MountBlue Technologies, Bangalore, Karnataka</em></p>
							<p><em>Client: Travel Triangle, GuruGram, Haryana </em></p>
              <ul>
                <li>Developed user friendly website.</li>
                <li>Fix bugs from existing website and implemented enhancements that significantly improved web functionality and speed.</li>
                <li>Produced websites compatible with multiple browsers.</li>
                <li>Developed designs to meet specific requirements such as quick-loading sites with particular layouts.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
	)
};

export default Resume;
