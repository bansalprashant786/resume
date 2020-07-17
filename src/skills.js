import React from 'react';

const Skills = () => {
	return(
		<section id="skills" className="skills section-bg">
		<div className="container" data-aos="fade-up">

			<div className="section-title">
				<h2>Skills</h2>
				<p>List of my Skills</p>
			</div>

			<div className="row skills-content">

				<div className="col-lg-6">

					<div className="progress">
						<span className="skill">ReactJs <i className="val">90%</i></span>
						<div className="progress-bar-wrap">
							<div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
						</div>
					</div>

					<div className="progress">
						<span className="skill">Redux <i className="val">90%</i></span>
						<div className="progress-bar-wrap">
							<div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
						</div>
					</div>

					<div className="progress">
						<span className="skill">JavaScript <i className="val">85%</i></span>
						<div className="progress-bar-wrap">
							<div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
						</div>
					</div>
					<div className="progress">
						<span className="skill">HTML5 <i className="val">95%</i></span>
						<div className="progress-bar-wrap">
							<div className="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
						</div>
					</div>

				</div>

				<div className="col-lg-6">
					<div className="progress">
						<span className="skill">CSS <i className="val">75%</i></span>
						<div className="progress-bar-wrap">
							<div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
						</div>
					</div>

					<div className="progress">
						<span className="skill">Jquery <i className="val">80%</i></span>
						<div className="progress-bar-wrap">
							<div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
						</div>
					</div>

					<div className="progress">
						<span className="skill">NodeJs <i className="val">60%</i></span>
						<div className="progress-bar-wrap">
							<div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
						</div>
					</div>

					<div className="progress">
						<span className="skill">MYSql <i className="val">60%</i></span>
						<div className="progress-bar-wrap">
							<div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
						</div>
					</div>

				</div>

			</div>

		</div>
	</section>
	);
}

export default Skills;
