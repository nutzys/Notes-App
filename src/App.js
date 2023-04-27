import Header from './components/Header';
import NoteList from './components/NoteList';
import { NoteProvider } from './store/noteContext';

function App() {
  return (
    <div className="App">
      <NoteProvider>
        <Header/>
        <NoteList/>
      </NoteProvider>
    </div>
  );
}

export default App;
