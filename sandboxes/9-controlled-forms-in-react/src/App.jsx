import { useState } from 'react';
import './App.css';
import FormWithObjectState from './components/FormWithObjectState';

function App() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [countryOfResidence, setCountryOfResidence] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSurnameChange = (event) => {
    setSurname(event.target.value);
  };

  const handleCountryOfResidenceChange = (event) => {
    setCountryOfResidence(event.target.value);
  };

  return (
    <>
      <h1>Hello World</h1>
      <form action="/" method="POST">
        <div>
          <label htmlFor="name">name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
            // onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="surname">surname</label>
          <input
            type="text"
            id="surname"
            name="surname"
            value={surname}
            onChange={handleSurnameChange}
          />
        </div>
        <div>
          <label htmlFor="countryOfResidence">Country of residence</label>
          <input
            type="text"
            id="countryOfResidence"
            name="countryOfResidence"
            value={countryOfResidence}
            onChange={handleCountryOfResidenceChange}
          />
        </div>

        <button type="submit">submit</button>
        <button type="reset">reset</button>
      </form>
      <h2>Form with object state</h2>
      <FormWithObjectState />
    </>
  );
}
export default App;
