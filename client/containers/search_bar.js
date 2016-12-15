import React, { Component } from 'react';

export default class SearchBar extends Component {
	render() {
		return(
			<div className="search-bar-container">
				<form>
					<button>Search</button>
				</form>
			</div>
		);
	}
};