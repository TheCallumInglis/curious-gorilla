import { useState } from 'react';

const FormWithObjectState = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    countryOfResidence: '',
  });

  const { name, surname, countryOfResidence } = formData;

  const handleOnChange = (event) => {
    const {
      target: { name, value },
    } = event;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('form is submitted', {
      formData,
      formDataAsJSONString: JSON.stringify(formData),
    });

    // fetch('https://example.com', {
    //   method: 'POST',
    //   body: JSON.stringify(formData),
    // });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleOnChange}
          // onChange={handleNameChange}
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
          onChange={handleOnChange}
        />
      </div>
      <div>
        <label htmlFor="countryOfResidence">Country of residence</label>
        <input
          type="text"
          id="countryOfResidence"
          name="countryOfResidence"
          value={countryOfResidence}
          onChange={handleOnChange}
        />
      </div>

      <button type="submit">submit</button>
      <button type="reset">reset</button>
    </form>
  );
};

export default FormWithObjectState;
