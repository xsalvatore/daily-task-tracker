import React, { Component } from 'react';

import Form from './Form.js';
import ListContainer from './ListContainer.js';

class App extends Component {
	render() {
		return (
			<div className="app">
				<div className="main-wrapper">
					<Form />
					<hr/>
					<ListContainer />
				</div>
			</div>
		);
	}
}

export default App;
