import React from 'react';

const links = {
	facebook: 'https://www.facebook.com/786bansal/',
	linkedin: 'https://www.linkedin.com/in/prashant-bansal-6aaa93171',
	github: 'https://github.com/bansalprashant786',
	twitter: 'https://twitter.com/prashant7862'
}

const SocialLinks = () => {
	return(
		<div className="social-links">
			<a href={links.twitter} target='_blank' className="twitter"><i className="bx bxl-twitter"></i></a>
			<a href={links.github} target='_blank' className="github"><i className="bx bxl-github"></i></a>
			<a href={links.facebook} target='_blank' className="facebook"><i className="bx bxl-facebook"></i></a>
			<a href={links.linkedin} target='_blank' className="linkedin"><i className="bx bxl-linkedin"></i></a>
		</div>
	);
}

export default SocialLinks;
