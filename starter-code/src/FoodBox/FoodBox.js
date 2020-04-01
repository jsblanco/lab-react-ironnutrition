import React from "react"

import 'bulma/css/bulma.css';

const FoodBox = (props) =>{

    return (
        <div className="box">
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={props.children.image} alt={props.children.name}/>
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{props.children.name}</strong> <br />
          <small>{props.children.calories} cal</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <input
            className="input"
            type="number" 
            value="1"
          />
        </div>
        <div className="control">
          <button className="button is-info">
            +
          </button>
        </div>
      </div>
    </div>
  </article>
</div>
    )
}

export default FoodBox;


/*
  {
    "name": "Pizza",
    "calories": 400,
    "image": "https://i.imgur.com/eTmWoAN.png",
    "quantity": 0
  },

*/