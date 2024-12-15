import './App.css';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import TimeStamp from './components/TimeStamp';
import messages from './data/messages.json';
import { useState } from 'react';

const App = () => {
  const [entries, setEntries] = useState(messages);

  const clickOnLike = (id) => {
    setEntries (entries => entries.map((entry) => {
      if (entry.id === id) {
        console.log(`Like for entry ID: ${entry.id}, liked: ${entry.liked}`);
        console.log({ ...entry, liked: !entry.liked });
        return { ...entry, liked: !entry.liked };
      } else {
        return entry;
      }
    }));
  };

  const totalLikes = entries.filter((entry) => entry.liked).length;
  console.log(`Counting likes: ${totalLikes}`);
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <section>
          <span className='widget' id='heartWidget'>{totalLikes} ❤️s</span> 
        </section>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component*/}
        {/* <ChatEntry
          id={messages[0].id}
          sender={messages[0].sender}
          body={messages[0].body}
          timeStamp={messages[0].timeStamp}
          liked={messages[0].liked}
        /> */}

        {/* Wave 02: Render ChatLog component */}
        <ChatLog entries={entries} onClickLike={clickOnLike} />
      </main>
    </div>
  );
};

export default App;
