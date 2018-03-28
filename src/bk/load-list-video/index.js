//D:\Projects\React Js\20180319\ReduxSimpleStarter\src
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyBonWpZwLfpoW0d9UerBh5yf2sE72XNQFs';
//const API_KEY = 'AIzaSyClfTQORy6hTd0hhOTm4TKl0ol9FeHEnJM';

class App extends Component {
	constructor(props) {
		super(props);
		
		this.state = { videos: [] };
		
		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
			//console.log(data);
			this.setState({ videos });
		});
	}
	render() {
		return (
			<div>
				<SearchBar />
				<VideoDetail videos={this.state.videos[0]} />
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
}

//#2 Object React se chuyen const thanh html
ReactDOM.render(<App />, document.querySelector('.container'));
