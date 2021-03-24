import './App.css';
import MemoryCard from './components/MemoryCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Memory Game</h1>
        <h4 id="subtitle">Match cards to win</h4>
      </header>
      <div className="App-cards">
          <MemoryCard></MemoryCard>
          <MemoryCard></MemoryCard>
          <MemoryCard></MemoryCard>
          <MemoryCard></MemoryCard>
          <MemoryCard></MemoryCard>
          <MemoryCard></MemoryCard>
          <MemoryCard></MemoryCard>
          <MemoryCard></MemoryCard>
          <MemoryCard></MemoryCard>
          <MemoryCard></MemoryCard>
          <MemoryCard></MemoryCard>
          <MemoryCard></MemoryCard>
          <MemoryCard></MemoryCard>
          <MemoryCard></MemoryCard>
          <MemoryCard></MemoryCard>
          <MemoryCard></MemoryCard>
        </div>
      
    </div>
  );
}

export default App;
