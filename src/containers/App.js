import React, { Component } from 'react';
import './App.css';
import { number } from 'prop-types';
import { homes } from '../homesData';

class App extends Component {
	constructor() {
		super();
		this.state = {
			searchfield: '',
			homes: homes
		};
	}

	handleChange = (event) => {
		this.setState({ searchfield: event.target.value });
	};
	render() {
		const { searchfield, homes } = this.state;

		const filteredHomes = homes.filter((item) => {
			return Object.values(item).some((value) => {
				if (typeof value !== 'number') {
					return value.toString().toLocaleLowerCase().includes(searchfield.toLocaleLowerCase());
				} else {
					return value.toString().toLocaleLowerCase().includes(searchfield.toLocaleLowerCase());
				}
			});
		});
		return (
			<div>
				<h3>Enter your search criteria</h3>
				<input className="search" type="text" value={searchfield} onChange={this.handleChange} />
				<div className="homes">
					{filteredHomes.map((home) => (
						<div>
							<div className="home__item">
								<div className="home__img">
									<img src={home.img} alt="house" />
								</div>
								<h1 className="home__title">{home.name}</h1>
								{/* <p>Username: {home.username}</p> */}
								<p className="home__location">Location: {home.location}</p>
								<p className="home__area">Area: {home.area}</p>
								<p className="home__rooms">Rooms: {home.rooms}</p>
								<p className="home__price">Price: {home.price}</p>
								{/* <p>Email: {home.email}</p> */}
								<button className="home__btn btn btn-primary">Contact Realtor</button>
							</div>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default App;
