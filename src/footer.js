import React from 'react';

import SocialLinks from './socialLinks';

const Footer = () => {
	return(
		<footer id="footer">
			<div className="container">
				<h3>Prashant Bansal</h3>
				<SocialLinks />
				<div className="copyright">
					&copy; Copyright <strong><span>MyResume</span></strong>. All Rights Reserved
				</div>
				{/* <div className="credits">
					Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
				</div> */}
			</div>
		</footer>
	)
}

export default Footer;
