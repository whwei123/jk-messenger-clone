import React, { Component } from 'react';
import './AppBarHeaderView.css';

class AppBarHeaderView extends Component {
	render() {
		return (
			<div className="AppBarHeaderView-container">
				<div className="settings-button"></div>
				<div className="app-title">Messenger</div>
				<div className="new-message-button"></div>
			</div>
		);
	}
}

export default AppBarHeaderView;
