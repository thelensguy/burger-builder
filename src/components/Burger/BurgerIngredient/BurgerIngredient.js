import React from "react";

import classes from "./BurgerIngredient.css";

const burgerIngredient = (props) => {
  let ingredient = null;

  switch (props.type) {
    case "bread-bottom":
      ingredient = <div className={classes.BreadBottom}></div>;
      break;
    case "bread-top":
      ingredient = (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1}></div>
          <div className={classes.Seeds2}></div>
        </div>
      );
      break;
    case "meat":
      ingredient = <div classname={classes.Meat}></div>;
      break;
    case "cheese":
      ingredient = <div classname={classes.Cheese}></div>;
      break;
    case "bacon":
      ingredient = <div classname={classes.Bacon}></div>;
      break;
    case "salad":
      ingredient = <div classname={classes.Salad}></div>;
      break;
    default:
      ingredient = null;
  }

  return ingredient;
};

export default burgerIngredient;
