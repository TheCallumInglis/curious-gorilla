import Ingredient from './Ingredient';

const IngredientList = (props) => {
  return (
    <ul>
      {props.availableIngredients.map((ingredient, idx) => (
        <Ingredient
          key={idx}
          ingredient={ingredient}
          addToBurger={props.addToBurger}
        />
      ))}
    </ul>
  );
};

export default IngredientList;