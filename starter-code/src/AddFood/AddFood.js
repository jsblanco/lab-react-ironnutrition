import React, { Component } from "react";

export default class AddFood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      calories: "",
      image: ""
    };
  }

  inputHandler = event => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
    console.log(this.state);
};

addNewFood = event => {
    event.preventDefault();
    this.props.addFood(this.state);
    this.setState({
        name: "",
        calories: "",
        image: ""
    })
};



  render() {
    return (
      <div className="add-food">
        <form onSubmit={this.addNewFood}>
          <h2>Add a new food</h2>
          <label htmlFor="name">Food name:</label>
          <input onChange={e => this.inputHandler(e)} type="text" name="name" />
          <label htmlFor="calories">Food calories</label>
          <input
            onChange={e => this.inputHandler(e)}
            type="number"
            name="calories"
          />
          <label htmlFor="image">Image url:</label>
          <input
            onChange={e => this.inputHandler(e)}
            type="text"
            name="image"
          />
          <button onClick={this.addNewFood}>Add new food</button>
        </form>
      </div>
    );
  }
}
