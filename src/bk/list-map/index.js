//2018/03/19
//D:\Projects\React Js\20180319\ReduxSimpleStarter\src
//#3 Can import cac goi quan trong
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//2018/03/23
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyBonWpZwLfpoW0d9UerBh5yf2sE72XNQFs';
//const API_KEY = 'AIzaSyClfTQORy6hTd0hhOTm4TKl0ol9FeHEnJM';

//#1 Create 1 constan co chua tag html
//const App = () => {
//#4
class App extends Component {
	constructor(props) {
		super(props);
		
		this.state = { videos: [] };
		
		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
			//console.log(data);
			//console.log(videos);
			this.setState({ videos });
		});
	}
	render() {
		return (
			<div>
				<SearchBar />
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
}

//#2 Object React se chuyen const thanh html
ReactDOM.render(<App />, document.querySelector('.container'));
