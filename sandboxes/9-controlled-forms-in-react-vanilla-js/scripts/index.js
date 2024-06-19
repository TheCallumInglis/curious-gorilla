// Element
const form = document.querySelector('form')


// Event

// form.addEventListener('submit', handleSubmit)

// Execution

function handleSubmit(event) {
  event.preventDefault();
  console.log('form submitted')

  const formData = new FormData(form)

  console.log({
    formData
  })
  
}


const pedro = {
  name: 'pedro',
  address: {
    houseName: '10',
    street: 'Downing street',
    postCode: 'w9 1qq',
  },
  lineManager: {
      name: 'raahima',
      address: {
      houseName: '1',
      street: 'pennsilvania',
      postCode: '00000',
    },
  }
}

const james = {
  ...pedro,
  lineManager: {
    ...pedro.lineManager,
    postCode: 111
  }
}

// console.log({ pedro, james })

const fruits = ['banana', 'orange']
const vegetables = ['tomatoes', 'onions']

const grocery = {
  fruits,
  vegetables,
}

console.log({grocery})
