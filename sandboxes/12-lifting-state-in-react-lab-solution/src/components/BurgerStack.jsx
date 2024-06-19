import Ingredient from './Ingredient';

const BurgerStack = (props) => {

  if (!props.stack.length) return (
    <ul><li>No Ingredients</li></ul>
  );

  return (
    <ul>
      {props.stack.map((ingredient, idx) => (
        <Ingredient
          key={idx}
          idx={idx}
          ingredient={ingredient}
          removeFromBurger={props.removeFromBurger}
        />
      ))}
    </ul>
  );
};

export default BurgerStack;