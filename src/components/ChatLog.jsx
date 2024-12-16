import './ChatLog.css';
import Proptypes from 'prop-types';
import ChatEntry from './ChatEntry';


const ChatLog = ({ entries, color = {}, onClickLike = () => {} }) => {
  return (
    <div className='chat-log'>
      {entries.map((entry) => (
        <ChatEntry
          id={entry.id}
          key={entry.id}
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
          liked={entry.liked}
          isLocal={entry.isLocal || false}
          color={color[entry.sender] || 'black'}
          onClickLike={onClickLike}
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
      liked: Proptypes.bool.isRequired,
      isLocal: Proptypes.bool,
    })
  ).isRequired,
  color: Proptypes.object,
  onClickLike: Proptypes.func,
};

export default ChatLog;