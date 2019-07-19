import React from "react";
import PropTypes from "prop-types";
import classes from "./BurgerIngredient.module.css";
const BurgerIngredient = props => {
  let ingreident = null;
  switch (props.type) {
    case "bread-bottom":
      ingreident = <div className={classes.BreadBottom} />;
      break;
    case "bread-top":
      ingreident = (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1} />
          <div className={classes.Seeds2} />
        </div>
      );
      break;
    case "meat":
      ingreident = <div className={classes.Meat} />;
      break;
    case "cheese":
      ingreident = <div className={classes.Cheese} />;
      break;
    case "salad":
      ingreident = <div className={classes.Salad} />;
      break;
    case "bacon":
      ingreident = <div className={classes.Bacon} />;
      break;
    default:
      ingreident = null;
  }
  return ingreident;
};

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};
export default BurgerIngredient;
