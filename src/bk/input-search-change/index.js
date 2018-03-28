//D:\Projects\React Js\20180319\ReduxSimpleStarter\src
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';

//const API_KEY = 'AIzaSyBonWpZwLfpoW0d9UerBh5yf2sE72XNQFs';
const API_KEY = 'AIzaSyClfTQORy6hTd0hhOTm4TKl0ol9FeHEnJM';
//const API_KEY = 'AIzaSyAuCVeNfKhtRk9KlChQPT1n027DP0_55s';

class App extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			videos: [],
			selectedVideo: null
		};
		
		this.videoSearch('surfboards');
	}
		
	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			//console.log(data);
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}
	
	render() {
		return (
			<div>
				<SearchBar onSearchTermChange={term => this.videoSearch(term)} />
				<VideoDetail videos={this.state.selectedVideo} />
				<VideoList
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos} />
			</div>
		);
	}
}

//#2 Object React se chuyen const thanh html
ReactDOM.render(<App />, document.querySelector('.container'));
