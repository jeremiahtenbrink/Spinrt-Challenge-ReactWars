import React, { Component } from 'react';
import './App.scss';
import DispChars from './components/DispChars';
import IndChars from './components/IndChars';


class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      currentChar: null,
      nextChar: null,
      prevChar: null
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results, nextChar: data.next, prevChar: data.previous});
      })
      .catch(err => {
        throw new Error(err);
      });
  };


  displayNextChar = event => {
    if(this.state.nextChar !== null) {
      const newData = this.getCharacters(this.state.nextChar);
      console.log(newData);
    }
  }

  displayPrevChar = event => {
    if(this.state.prevChar !== null) {
      const newData = this.getCharacters(this.state.prevChar);
      console.log(newData);
    }
  }

  displayChar = name => {
    const currentChar = this.state.starwarsChar.find(char => char.name === name);
    console.log(currentChar);
  }

  render() {
    if (this.state.currentChar === null) {
      return (
        <div className='App'>
          <h1 className='Header'>React Wars!</h1>
          <div className='charList'>
            <DispChars chars={this.state.starwarsChars} 
              displayCurrentChar={this.displayCurrentChar} 
              displayNextPage={this.displayNextChar}
              displayPrevPage={this.displayPrevChar}
              nextPage={this.state.nextChar}
              prevPage={this.state.prevChar}
            />
          </div>
        </div>
      );
    }
    else {
      return (
        <div>
          <IndChars backToList={this.backToList} character={this.state.currentChar} />
        </div>
      );
    }
  }
}

export default App;
