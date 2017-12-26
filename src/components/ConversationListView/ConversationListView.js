import React, { Component } from 'react';
import './ConversationListView.css';
import ConversationListItemView from '../ConversationListItemView';

class ConversationListView extends Component {
	render() {
		return (
			<div className="ConversationListView-container">
				<ConversationListItemView />
				<ConversationListItemView />
				<ConversationListItemView />
				<ConversationListItemView />
				<ConversationListItemView />
			</div>
		);
	}
}

export default ConversationListView;
