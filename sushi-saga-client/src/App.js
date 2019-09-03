import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor(){
    super()
    this.state = {
      sushis: [],
      index: 0,
      eatenSushi: [],
      budget: 80
    }
  }

  componentDidMount(){
    fetch(API).then(resp => resp.json()).then(sushis => {console.log(sushis); 
    let formatted = sushis.map(sushi => Object.assign(sushi, {eaten: false}));
    this.setState({
      sushis: formatted
    })
    
    })
  }

  fourSushis = () => {
    let begin = this.state.index
    let end = this.state.index + 4
    return this.state.sushis.slice(begin, end)
  }

  changeSushis = () => {
    if (this.state.index < 96) {
    this.setState({
      ...this.state,
      index: this.state.index + 4
    }) } else {
      this.setState({
        ...this.state,
        index: 0
      })
    }
  }

  eatSushi = (sushi) => {
    let newBudget = this.state.budget - sushi.price 
    if (newBudget >= 0 ) {
    this.setState({
      ...this.state,
      eatenSushi: [...this.state.eatenSushi, sushi],
      budget: this.state.budget - sushi.price
    }) 
  } else {
    alert('not enough money!')
  }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer  fourSushis={this.fourSushis()} changeSushis={this.changeSushis} eatSushi={this.eatSushi} eatenSushi={this.state.eatenSushi} />
        <Table eatenSushi={this.state.eatenSushi} budget={this.state.budget}/>
      </div>
    );
  }
}

export default App;