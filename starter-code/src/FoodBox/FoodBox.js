import React, {useState} from "react"
import 'bulma/css/bulma.css';


const FoodBox = (props) =>{

const [quantity, setQuantity]=useState(1)

    return (
        <div className="box">
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={props.food.image} alt={props.food.name}/>
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{props.food.name}</strong> <br />
          <small>{props.food.calories} cal</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <input
            onChange={(event)=>setQuantity(event.target.value)}
            className="input"
            type="number" 
            value={quantity}
          />
        </div>
        <div className="control">
          <button onClick={()=>props.addtoPersonalList({...props.food, quantity:quantity})} className="button is-info">
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