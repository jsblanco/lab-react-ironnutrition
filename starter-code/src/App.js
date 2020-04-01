import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './FoodBox/FoodBox';
import AddFood from './AddFood/AddFood';





class App extends Component {
  state={
    foodList: foods
  }


  addFood=props=>{
    const {name, image, calories} = props
    let newFood = {name, image, calories, quantity:0}
    let foodInList=[...this.state.foodList]
    foodInList.push(newFood)
    this.setState({
      foodList: foodInList
    })
  }

  
  render() {
    return (
      <div className="App">
      <AddFood addFood={this.addFood}/>
      <section className="search-results">
      {this.state.foodList.map((food, index)=>{
      return <FoodBox key={index}>{food}</FoodBox>})}
      </section>
      </div>
    );
  }
}

export default App;
