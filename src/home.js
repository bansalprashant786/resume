
//eslint-disable-next-line
import React from 'react';
import SocialLinks from './socialLinks';



const Home = () => {
	return(
		<section id="hero" className="d-flex flex-column justify-content-center">
			<div className="container" data-aos="zoom-in" data-aos-delay="100">
				<h1>Prashant Bansal</h1>
				<p>I'm <span className="typed" data-typed-items="Web Developer, Freelancer"></span></p>
				<SocialLinks />
			</div>
		</section>
	);
};

export default Home;
