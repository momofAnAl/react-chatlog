import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
// import { useState } from 'react';

const ChatEntry = ({ id, sender, body, timeStamp, liked, onClickLike }) => {
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">
          <TimeStamp time={timeStamp} />
        </p>
        <button 
          onClick={() => {
            console.log(`button clicked for ID: ${id}`);
            onClickLike(id);
          }} 
          className="like">
          {liked ? '❤️': '🤍'}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  onClickLike: PropTypes.func.isRequired,
};

export default ChatEntry;
