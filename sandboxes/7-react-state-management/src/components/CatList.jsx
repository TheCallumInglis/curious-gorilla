import { useState } from 'react';

const ExampleComponent = () => {
  const [cats, setCats] = useState([
    { name: 'Myshka', breed: 'Ragdoll' },
    { name: 'Malta', breed: 'Turkish Angora' },
  ]);

  const addCat = (newCat) => {
    // spread current cats array and newCat object into a new array
    const newCatsArray = [...cats, newCat];

    // cats.push(newCat); => 🛑 NEVER DO THIS! THIS A MUTABLE PATTERN
    // call state setter function with this new array
    setCats(newCatsArray);
  };

  return (
    <>
      <button onClick={() => addCat({ name: 'Kira', breed: 'Ragamuffin' })}>
        Add Cat
      </button>
      <ul>
        {cats.map((cat, idx) => (
          <li key={idx}> {cat.name} </li>
        ))}
      </ul>
    </>
  );
};

export default ExampleComponent;
