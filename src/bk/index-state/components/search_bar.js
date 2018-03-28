import React, { Component } from 'react';
//import ReactDOM from 'react-dom';

//#1
//const SearchBar = () => {
//	return <input />;
//};
class SearchBar extends Component {
	//#3
	constructor(props) {
		super(props);
		
		this.state = { term: '' };
	}
	
	render() {
		//#3
		//return <input onChange={event => this.setState({ term: event.target.value })} />;
		return (
			<div>
				<input 
					value={ this.state.term }
					onChange={event => this.setState({ term: event.target.value })} />
				Value after INPUT : { this.state.term }
			</div>
		)
		
		//#2 //return <input onChange={this.onInputChange} />;
		//return <input onChange={(event) => console.log(event.target.value)} />;
		//return <input onChange={event => console.log(event.target.value)} />;
	}
	
	//#2 ko dung method rieng -> ket hop luon
	//onInputChange(event) {
	//	console.log(event);
	//	//console.log(event.target.value);
	//}
}

export default SearchBar;