import React from "react"
import 'bulma/css/bulma.css';

const PersonalFoodList = (props) =>{

 let {name, calories,quantity,image}=props.children
 let totalCalories = calories*quantity
 if (calories>1){name+="s"}
    return (
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={image} alt={name}/>
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{name}</strong> <br />
          <small>{totalCalories} cal</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
      <p>
          <strong>Quantity:</strong> <br />
          <small>{quantity}</small>
        </p>
      </div>
    </div>
    <button onClick={()=>props.deleteFood(props.children)} className="button is-info">
            -
          </button>
  </article>

    )
}
export default PersonalFoodList;