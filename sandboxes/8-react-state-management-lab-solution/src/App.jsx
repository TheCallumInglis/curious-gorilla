import { useState } from 'react';
import './App.css';

const App = () => {
  const [zombieFighters, setZombieFighters] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    },
  ]);
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);

  // Helper function to calculate total strength
  const calculateTotalStrength = (team) => {
    return team.reduce((acc, fighter) => acc + fighter.strength, 0);
  };

  // Helper function to calculate total agility
  const calculateTotalAgility = (team) => {
    return team.reduce((acc, fighter) => acc + fighter.agility, 0);
  };

  const handleAddFighter = (fighter) => {
    if (money >= fighter.price) {
      // Add fighter to the team
      const newTeam = [...team, fighter];
      setTeam(newTeam);

      // Remove fighter from zombieFighters
      const updatedZombieFighters = zombieFighters.filter(
        (zombieFighter) => zombieFighter !== fighter,
      );
      setZombieFighters(updatedZombieFighters);

      // Update money, strength, and agility
      setMoney(money - fighter.price);
      setTotalStrength(calculateTotalStrength(newTeam));
      setTotalAgility(calculateTotalAgility(newTeam));
    } else {
      console.log('Not enough money');
    }
  };

  const handleRemoveFighter = (fighter) => {
    const indexOfFighterToRemove = team.findIndex(
      (member) => member === fighter,
    );

    if (indexOfFighterToRemove !== -1) {
      // Remove the fighter from the team
      const newTeam = [...team];
      newTeam.splice(indexOfFighterToRemove, 1);
      setTeam(newTeam);

      // Add the fighter back to the zombieFighters list
      const updatedZombieFighters = [...zombieFighters, fighter];
      setZombieFighters(updatedZombieFighters);

      // Update money, strength, and agility
      setMoney(money + fighter.price);
      setTotalStrength(calculateTotalStrength(newTeam));
      setTotalAgility(calculateTotalAgility(newTeam));
    }
  };

  return (
    <>
      <h1>Zombie Fighters</h1>
      <h2>Money: {money}</h2>
      <h2>Team Strength:{totalStrength}</h2>
      <h2>Team Agility:{totalAgility}</h2>
      <h2>Team</h2>
      <ul>
        {team.length > 0 ? (
          team.map((fighter, index) => (
            <li key={index}>
              <img src={fighter.img} alt={fighter.name} />
              <p>{fighter.name}</p>
              <p>Price: {fighter.price}</p>
              <p>Strength: {fighter.strength}</p>
              <p>Agility: {fighter.agility}</p>
              <button onClick={() => handleRemoveFighter(fighter)}>
                Remove
              </button>
            </li>
          ))
        ) : (
          <li>Pick some team members</li>
        )}
      </ul>
      <h2>Fighters</h2>
      <ul>
        {zombieFighters.map((fighter, index) => (
          <li key={index}>
            <img src={fighter.img} alt={fighter.name} />
            <p>{fighter.name}</p>
            <p>Price: {fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <button onClick={() => handleAddFighter(fighter)}>Add</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
