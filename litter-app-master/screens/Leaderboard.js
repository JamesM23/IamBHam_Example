import React, { Component } from 'react';
import Leaderboard from 'react-native-leaderboard';


export default class Leaderboard extends Component{
    constructor(props) {
        super(props);
        this.state = {
    data: [
        {userName: 'Joe', highScore: 52},
        {userName: 'Jenny', highScore: 120},
        {userName: 'Billy', highScore: 45},
        {userName: 'Riley', highScore: 64},
        {userName: 'Pauly', highScore: 78},
        {userName: 'Bobby', highScore: 100},
        {userName: 'Earl', highScore: 20},
        //...
    ] //can also be an object of objects!: data: {a:{}, b:{}}
}
    }
 
render() {
  return (
      <Leaderboard 
        data={this.state.data} 
        sortBy='highScore' 
        labelBy='userName'/>)

}
}