import React, { Component } from 'react';
import './ConversationListItemView.css';

class ConversationListItemView extends Component {
	render() {
		return (
			<div className="ConversationListItemView">
				<div className="profile-picture-container">
					{/* add <img> here */}
				</div>
				<div className="text-container">
					<div className="top-text-container">
						<span className="name">{this.props.name || "FirstName LastName"}</span>
						<span className="timestamp">{this.props.timestamp || "12:34pm"}</span>
					</div>
					<span className="preview">{this.props.preview || "You: previous message here"}</span>
				</div>
			</div>
		);
	}
}

export default ConversationListItemView;
