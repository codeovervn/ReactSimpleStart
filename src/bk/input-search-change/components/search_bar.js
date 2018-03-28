import React, { Component } from 'react';

class SearchBar extends Component {
	//#3
	constructor(props) {
		super(props);
		
		this.state = { term: '' };
	}
	
	render() {
		return (
			<div className="search-bar">
				<input 
					value={ this.state.term }
					onChange={event => this.onInputChange(event.target.value )} />
			</div>
		)
	}
	
	//#2 ko dung method rieng -> ket hop luon
	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}

export default SearchBar;