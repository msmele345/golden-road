import './App.css';
import Header from './components/MainHeader/Header';
import Shows from './components/Show/Shows';

function App() {
  return (
    <div className="App">
      <Header/>
        <main>
          <Shows/>
        </main>
    </div>
  );
}

export default App;
