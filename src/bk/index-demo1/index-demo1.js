//#3 Can import cac goi quan trong
import React from 'react';
import ReactDOM from 'react-dom';

//#1 Create 1 constan co chua tag html
const App = function() {
	return <div>Hi there</div>;
}
//#2 Object React se chuyen const thanh html
ReactDOM.render(<App />, document.querySelector('.container'));
