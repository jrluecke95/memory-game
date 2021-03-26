import React from "react";
import "./App.css";
import MemoryCard from "./components/MemoryCard";
import Restart from "./components/Restart";

//shuffles deck
const shuffle = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
//generates deck
const generateDeck = () => {
  const symbols = ['∆', 'ß', '£', '§', '•', '$', '+', 'ø'];
  let deck = [];
  for (let i = 0; i < 16; i++) {
    let card = {isFlipped: false, symbol: symbols[i%8]}
    deck.push(card)
  }
  return shuffle(deck)
}
class App extends React.Component {
  // setting up deck and picked cards array
  constructor(props) {
    super(props);
    this.state = {
      deck: generateDeck(),
      pickedCards: [],
    };
  }
// checks to see if all cards are 'flipped over'
  isGameOver = (deck) => {
    for (let i = 0; i < deck.length; i++) {
      if (deck[i].isFlipped === false) {
        return false
      }
    }
    return true
  }
// restarts game by rendering new deck
  restart = () => {
    this.setState({
      deck: generateDeck(),
      pickedCards: []
    })
  }
  // pick card logic
  pickCard = (cardIndex) => {
    // if the card is already flipped then return early
    if (this.state.deck[cardIndex].isFlipped) {
      return 
    }
    // copies card so we can change state
    let cardToFlip = {...this.state.deck[cardIndex]};
    // changes state of flipped to true
    cardToFlip.isFlipped = true;
    // puts picked cards into a array so we can check the length later on
    let newPickedCards = this.state.pickedCards.concat(cardIndex);
    // iterates through new deck to see which cards it needs to flip and flips it as 'isFlipped' = true
    let newDeck = this.state.deck.map( (card, index) => {
      if (cardIndex === index) {
        return cardToFlip;
      }
      return card
    })
    // when the length is equal to 2 then execute code below
    if (newPickedCards.length === 2) {
      // setting up index based off of newpickedcards 
      let card1Index = newPickedCards[0];
      let card2Index = newPickedCards[1];
      // this line checks if they match and then runs unflip below
      if (newDeck[card1Index].symbol !== newDeck[card2Index].symbol) {
        setTimeout( () => {this.unflipCards(card1Index, card2Index)}, 1000)
      }
      // zeroing out newpicked cards to update state with 
      newPickedCards = []
    }
    // sets state of deck using newDeck to assign deck and pickedCards
    this.setState({
      deck: newDeck,
      pickedCards: newPickedCards
    })
  }

  unflipCards = (card1Index, card2Index) => {
    // setting up our card clones so we can change state below
    let card1 = {...this.state.deck[card1Index]};
    let card2 = {...this.state.deck[card2Index]};
    // setting cards back to isFlipped=== false because they did not match as this funciton only runs when they dont match
    card1.isFlipped = false;
    card2.isFlipped = false;
    // this map returns card1 and card2 as isFlipped = true beacuse they were flipped before and passes every othe card untouched 
    const newDeck = this.state.deck.map((card, index) => {
      if (card1Index === index) {
        return card1
      }
      if (card2Index === index) {
        return card2
      }
      return card
    })
    //updates new deck with deck we just created with cards that were flipped 
    this.setState({
      deck: newDeck
    })
  }

  render() {
    // maps through deck and creates a card 16 times
    let cardsJSX = this.state.deck.map( (card, index) => {
      return <MemoryCard 
        symbol={card.symbol} 
        isFlipped={card.isFlipped} 
        key={index} 
        pickCard={this.pickCard.bind(this, index)}/>
    })
    return (
      <div className="App">
        <header className="App-header">
          <h1>Memory Game</h1>
          <h4 id="subtitle">Match cards to win</h4>
        </header>
        {/* displays cards */}
        <div className="App-cards">
          {cardsJSX.slice(0,16)}
        </div>
        {/* runs isgameover to see if deck is all flipped and if so displays restart button */}
        {this.isGameOver(this.state.deck) && <Restart restart={this.restart}/>}
      </div>
    );
  }
}

export default App;

        /* /* {this.state.gameOver && <button onClick={this.restart}>Restart</button>} */