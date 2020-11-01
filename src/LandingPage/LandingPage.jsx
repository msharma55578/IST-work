import React from 'react';
import './_landing_page.css';

import { Link } from 'react-router-dom';

const LandingPage = (props) => {
	return (
		<div>
			<div>
				<Link to="/Task1">
					<button className="landing-page-button"> Task 1</button>
				</Link>
			</div>
			<div>
				<button className="landing-page-button"> Task 2</button>
			</div>
		</div>
	);
};

export default LandingPage;

