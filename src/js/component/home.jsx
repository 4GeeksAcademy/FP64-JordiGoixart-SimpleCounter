import React, { useState } from 'react';
import './home.css';
import { Counter1 } from './Counter.jsx';
import { Counter2 } from './Counter.jsx';
import { Counter3 } from './Counter.jsx';
import { Counter4 } from './Counter.jsx';
import { Counter5 } from './Counter.jsx';

const Home = () => {
	return (
		<>
		<div className="app__background">
			<div className="container">
				<div className="counterBox">
					<div className="1 num first">
						<h1><i class="clock far fa-clock"></i></h1>
					</div>
					<div className="2 num">
						<h1><Counter5 /></h1>
					</div>
					<div className="3 num">
						<h1><Counter4 /></h1>
					</div>
					<div className="4 num">
						<h1><Counter3 /></h1>
					</div>
					<div className="5 num">
						<h1><Counter2 /></h1>
					</div>
					<div className="6 num">
						<h1><Counter1 /></h1>
					</div>
				</div>
			</div>
		</div>
		</>
	);
};

export default Home;
