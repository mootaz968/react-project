import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   const [count, setCount] = useState(0)
//   const [count2, setCount2] = useState(2)
//   const [count3, setCount3] = useState(3)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <button onClick={() => setCount2((count2) => count2 + 1)}>
//           count is {count2}
//         </button>
//         <button onClick={() => setCount3((count3) => count3 + 1)}>
//           count is {count3}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }
// export default App

import React from 'react';

// Define a Card component for celebrities
const CelebrityCard = ({name, profession, image, description }) => {
  return (
    <div className="celebrity-card">
      <img src={image} alt={name} />
      <div className="info">
        <h2>{name}</h2>
        <h3>{profession}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

// Define a CardList component that renders a list of celebrity cards
const CelebrityCardList = ({ celebrities }) => {
  return (
    <div className="celebrity-card-list">
      {celebrities.map((celebrity, index) => (
        <CelebrityCard
          key={index}
          name={celebrity.name}
          profession={celebrity.profession}
          image={celebrity.image}
          description={celebrity.description}
        />
      ))}
    </div>
  );
};

// Example usage of CelebrityCardList component
const celebrities = [
  {
    name: 'Leonardo DiCaprio',
    profession: 'Actor',
    image: 'https://example.com/leo.jpg',
    description: 'Leonardo Wilhelm DiCaprio is an American actor, producer, and environmentalist. He has often played unconventional roles, particularly in biopics and period films.'
  },
  {
    name: 'Beyoncé',
    profession: 'Singer-Songwriter',
    image: 'https://example.com/beyonce.jpg',
    description: 'Beyoncé Giselle Knowles-Carter is an American singer, songwriter, and actress. Born and raised in Houston, Texas, Beyoncé performed in various singing and dancing competitions as a child.'
  },
  {
    name: 'Dwayne Johnson',
    profession: 'Actor',
    image: 'https://example.com/dwayne.jpg',
    description: 'Dwayne Douglas Johnson, also known by his ring name The Rock, is an American actor, producer, businessman, and retired professional wrestler. He was a professional wrestler for the World Wrestling Federation (WWF, now WWE) for eight years.'
  }
];

const App = () => {
  return (
    <div className="app">
      <h1>Celebrity Cards</h1>
      <CelebrityCardList celebrities={celebrities} />
    </div>
  );
};

export default App;
