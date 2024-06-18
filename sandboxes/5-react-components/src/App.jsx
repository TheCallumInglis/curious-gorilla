import { useState } from 'react';
import './App.css';
import reactLogo from './assets/react.svg';
import TableRow from './components/TableRow';
import viteLogo from '/vite.svg';

export const name = 'james';

const greet = `hello my name ${8 + 2}`;

console.log({ greet });

// const setCountHandler = (count) => {
//   return count + 1
// }
// const setCountHandler = (james) =>  james + 1;

const students = [
  {
    name: 'tatiana',
    randomNumber: 67,
  },
  {
    name: 'ciaran',
    randomNumber: 89,
  },
  {
    name: 'david',
    randomNumber: 75,
  },
  {
    name: 'danielle',
    randomNumber: -3,
  },
  {
    name: 'callum',
    randomNumber: -35,
  },
];

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((count) => count + 1);
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClick}>count is {count}</button>
        <p>{greet}</p>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <h2>Students</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Random number</th>
          </tr>
        </thead>
        <tbody>
          {/* We use this hardcoded table row to demonstrate the shape of each iteration in line 94*/}
          {/* <tr>
            <td>Tatiana</td>
            <td>67</td>
          </tr> */}
          {students.map(({ name, randomNumber }) => {
            // This code was refactored in line 91
            // if (randomNumber > 0) {
            //   return (
            //     <tr key={randomNumber}>
            //       <td>{name}</td>
            //       <td>{randomNumber}</td>
            //     </tr>
            //   );
            // } else {
            //   return null;
            // }

            return randomNumber + count > 0 ? (
              // <tr key={randomNumber}>
              //   <td>{name}</td>
              //   <td>{randomNumber + count}</td>
              // </tr>
              <TableRow
                name={name}
                randomNumber={randomNumber}
                count={count}
                key={randomNumber}
              />
            ) : null;
          })}
        </tbody>
      </table>
    </>
  );
}

export default App;
