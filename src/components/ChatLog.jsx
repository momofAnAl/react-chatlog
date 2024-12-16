import './ChatLog.css';
import Proptypes from 'prop-types';
import ChatEntry from './ChatEntry';


const ChatLog = ({ entries, color, onClickLike }) => {
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
          isLocal={entry.isLocal}
          color={color[entry.sender]}
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
      isLocal: Proptypes.bool.isRequired,
    })
  ).isRequired,
  color: Proptypes.object.isRequired,
  onClickLike: Proptypes.func.isRequired,
};

export default ChatLog;