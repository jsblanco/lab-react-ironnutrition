import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from "./FoodBox/FoodBox";
import AddFood from "./AddFood/AddFood";
import PersonalFoodList from "./PersonalFoodList/PersonalFoodList";

class App extends Component {
  state = {
    foodList: foods,
    displayAddFood: false,
    searchQuery: "",
    personalFoodList: []
  };

  displayAddFood = () => {
    this.setState({
      displayAddFood: !this.state.displayAddFood
    });
  };

  addFoodHandler = props => {
    const { name, image, calories } = props;
    let newFood = { name, image, calories, quantity: 0 };
    let foodInList = [...this.state.foodList];
    foodInList.push(newFood);
    this.setState({
      foodList: foodInList
    });
  };

  searchHandler = query => {
    console.log(query.target.value);
    this.setState({
      searchQuery: query.target.value
    });
  };

  addToList = food => {
    console.log(food.name);
    let alreadyInList = false
    let personalList = [...this.state.personalFoodList];
    personalList.map(savedFood => {
      console.log("savedFood name: ",savedFood.name)
      if (savedFood.name === food.name) {
        savedFood.quantity += food.quantity;
        alreadyInList= true
      }
    });
    if (!alreadyInList){
      personalList.push(food);
    }
    this.setState({
      personalFoodList: personalList
    });
  };

  removeFromList = food => {
    let personalList = [...this.state.personalFoodList]
    personalList.splice(personalList.indexOf(food), 1)
    this.setState({
      personalFoodList: personalList
    })
  }

  render() {
    let addFoodForm, foodList;
    if (this.state.displayAddFood === true) {
      addFoodForm = <AddFood addFood={this.addFoodHandler} />;
    }

    if (this.state.searchQuery) {
      let query = this.state.searchQuery;
      foodList = this.state.foodList.filter(foodElement =>
        foodElement.name.toLowerCase().includes(query.toLowerCase())
      );
    } else {
      foodList = this.state.foodList;
    }

    return (
      <div className="App">
        <div className="app-body">
          <section className="search-results">
            <h3>Food list:</h3>
            <button onClick={this.displayAddFood}>Add food</button>
            {addFoodForm}
            <label htmlFor="search">Search for food:</label>
            <input
              onChange={e => this.searchHandler(e)}
              type="text"
              name="search"
            />
            {foodList.map((food, index) => {
              return (
                <FoodBox
                  key={index}
                  addtoPersonalList={this.addToList}
                  food={food}
                ></FoodBox>
              );
            })}
          </section>
          <section className="personal-list">
            <h3>Personal food list:</h3>
            {this.state.personalFoodList.map((food, index) => {
              return <PersonalFoodList key={index} deleteFood={this.removeFromList}>{food}</PersonalFoodList>;
            })}
          </section>
        </div>
      </div>
    );
  }
}

export default App;
