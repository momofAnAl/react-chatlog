import './App.css';
import ChatLog from './components/ChatLog';
import messages from './data/messages.json';
import { useState } from 'react';
import ColorChoice from './components/ColorChoice';

const App = () => {
  const localSender = 'Vladimir';

  const [entries, setEntries] = useState(
    messages.map((message) => ({
      ...message, isLocal: message.sender === localSender,
    }))
  );

  const [colors, setColors] = useState({
    Vladimir: '#00ff00',
    Estragon: '#0000ff',
  });

  const senders = [...new Set(entries.map((msg) => msg.sender))];

  const handleColorChange = (sender, color) => {
    setColors((colors) => ({
      ...colors, [sender]: color,
    }));
  };

  const clickOnLike = (id) => {
    setEntries(entries => entries.map((entry) => {
      if (entry.id === id) {
        // console.log(`Like for entry ID: ${entry.id}, liked: ${entry.liked}`);
        // console.log({ ...entry, liked: !entry.liked });
        return { ...entry, liked: !entry.liked };
      } else {
        return entry;
      }
    }));
  };

  const totalLikes = entries.filter((entry) => entry.liked).length;
  // console.log(`Counting likes: ${totalLikes}`);
  return (
    <div id="App">
      <header>
        <h1>Chat between <span style={{ color: colors.Vladimir }}>{senders[0]}</span> and{' '}
          <span style={{ color: colors.Estragon }}>{senders[1]}</span>
        </h1>
        <section className='color-row'>
          <div>
            <ColorChoice sender={senders[0]} setColorCallBack={handleColorChange} />
          </div>
          <span className='widget' id='heartWidget'>{totalLikes} ❤️s</span>
          <div>
            <ColorChoice sender={senders[1]} setColorCallBack={handleColorChange} />
          </div>
        </section>
      </header>
      <main>
        <ChatLog entries={entries} color={colors} onClickLike={clickOnLike} />
      </main>
    </div>
  );
};

export default App;
