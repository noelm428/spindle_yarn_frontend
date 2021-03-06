import React, { Component } from 'react';

class Item extends Component {
	render = () => {
		return (
			<footer className='page-footer grey'>
				<div className='container'>
					<div className='row'>
						<div className='col l6 s12'>
							<h5 className='white-text'>About Us</h5>
							<p className='grey-text text-lighten-4'>
								We are passionate about what fashion can do
							</p>
							<p classname='grey-text text-lighten-4'>
								We are celebrating the creative minds behind the products
							</p>
						</div>
						<div className='col l4 offset-l2 s12'>
							<h4 className='white-text'>Developers</h4>
							<ul>
								<li>
									<a
										className='grey-text text-lighten-3'
										href='https://github.com/ajose-malik'>
										Malik
									</a>
								</li>
								<li>
									<a
										className='grey-text text-lighten-3'
										href='https://github.com/noelm428'>
										Noel
									</a>
								</li>
								<li>
									<a
										className='grey-text text-lighten-3'
										href='https://github.com/ryanklintworth'>
										Ryan
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className='footer-copyright'>
					<div className='container'>© 2021 Spindle & Yarn</div>
				</div>
			</footer>
		);
	};
}

export default Item;
