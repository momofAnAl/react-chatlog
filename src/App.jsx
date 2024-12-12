import './App.css';
import './components/ChatEntry';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/CharLog';
import './components/TimeStamp';
import messages from './data/messages.json';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog entries={messages} />

      </main>
    </div>
  );
};

export default App;
