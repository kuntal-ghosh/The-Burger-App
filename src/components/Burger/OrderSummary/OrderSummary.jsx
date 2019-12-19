import React, { Component } from "react";
import aux from "./../../../hoc/Auxulary";
import style from "./OrderSummary.module.css";
import Button from "./../../common/Button/Button";
class Ordersummary extends Component {
  state = {};
  componentWillUpdate() {
    console.log("[Ordersummary] will update");
  }
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(key => {
      return (
        <li key={key}>
          <span>{key}</span>:{this.props.ingredients[key]}
        </li>
      );
    });
    return (
      <aux className={style.summary}>
        <h1>Your Order</h1>
        <p>a delicious burger with the following ingredients</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price : {this.props.price.toFixed(2)}</strong>
        </p>
        <br />
        <p>continue to Checkout?</p>
        <Button clicked={this.props.onCancel} type="btn-danger">
          Cancel
        </Button>
        <Button clicked={this.props.onContinue} type="btn-success">
          Continue
        </Button>
      </aux>
    );
  }
}

export default Ordersummary;
