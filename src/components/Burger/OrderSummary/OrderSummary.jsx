import React from "react";
import aux from "./../../../hoc/Auxulary";
import style from "./OrderSummary.module.css";
import Button from "./../../common/Button/Button";
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
      <p>
        <strong>Total Price : {props.price.toFixed(2)}</strong>
      </p>
      <br />
      <p>continue to Checkout?</p>
      <Button clicked={props.onCancel} type="btn-danger">
        Cancel
      </Button>
      <Button clicked={props.onContinue} type="btn-success">
        Continue
      </Button>
    </aux>
  );
};

export default OrderSummary;
