//2018/03/19
//D:\Projects\React Js\20180319\ReduxSimpleStarter\src
//#3 Can import cac goi quan trong
import React from 'react';
import ReactDOM from 'react-dom';

//2018/03/23
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBonWpZwLfpoW0d9UerBh5yf2sE72XNQFs';
//const API_KEY = 'AIzaSyClfTQORy6hTd0hhOTm4TKl0ol9FeHEnJM';
YTSearch({key: API_KEY, term: 'surfboards'}, function (data) {
	console.log(data);
});

//#1 Create 1 constan co chua tag html
const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}

//#2 Object React se chuyen const thanh html
ReactDOM.render(<App />, document.querySelector('.container'));
