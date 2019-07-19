import React from "react";
import aux from "./../../../hoc/Auxulary";
import style from "./OrderSummary.module.css";
const OrderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(key => {
    return (
      <li key={key}>
        <span>{key}</span>:{props.ingredients[key]}
      </li>
    );
  });
  return (
    <aux className={style.summary}>
      <h1>Your Order</h1>
      <p>a delicious burger with the following ingredients</p>
      <ul>{ingredientSummary}</ul>
      <p>continue to Checkout?</p>
    </aux>
  );
};

export default OrderSummary;
