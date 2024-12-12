import './ChatLog.css';
import Proptypes from 'prop-types';
import ChatEntry from './ChatEntry';
import React, { useState } from 'react';

const ChatLog = ({ entries }) => {
	return (
		<div>
			{entries.map((entry)=> (
					<ChatEntry 
					key={entry.id}
					sender={entry.sender}
					body={entry.body}
					timeStamp={entry.timeStamp}	
				/>
			))}
		</div>
	);
};

ChatLog.propTypes = {
	entries: Proptypes.arrayOf(
		Proptypes.shape({
			id: Proptypes.number.isRequired,
			sender: Proptypes.string.isRequired,
			body: Proptypes.string.isRequired,
			timeStamp: Proptypes.string.isRequired,
		})
	).isRequired,
};

export default ChatLog;