import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Leonardo_Dicaprio_Cannes_2019.jpg/330px-Leonardo_Dicaprio_Cannes_2019.jpg',
    description: 'Leonardo Wilhelm DiCaprio is an American actor, producer, and environmentalist. He has often played unconventional roles, particularly in biopics and period films.'
  },
  {
    name: 'Beyoncé',
    profession: 'Singer-Songwriter',
    image: 'https://media1.popsugar-assets.com/files/thumbor/ba6DLGNmUTug9xJUvKYvlPdfwZQ/9x192:2244x2427/fit-in/500x500/filters:format_auto-!!-:strip_icc-!!-/2020/02/11/900/n/1922398/112085525e431065dba032.37867622_/i/Beyonc%C3%A9-Knowles.jpg',
    description: 'Beyoncé Giselle Knowles-Carter is an American singer, songwriter, and actress. Born and raised in Houston, Texas, Beyoncé performed in various singing and dancing competitions as a child.'
  },
  {
    name: 'Dwayne Johnson',
    profession: 'Actor',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Dwayne_%22The_Rock%22_Johnson_Visits_the_Pentagon_%2841%29_%28cropped%29.jpg/330px-Dwayne_%22The_Rock%22_Johnson_Visits_the_Pentagon_%2841%29_%28cropped%29.jpg',
    description: 'Dwayne Douglas Johnson, also known by his ring name The Rock, is an American actor, producer, businessman, and retired professional wrestler. He was a professional wrestler for the World Wrestling Federation (WWF, now WWE) for eight years.'
  }
];

const App = () => {
  const [selectedCelebrity, setSelectedCelebrity] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleCardClick = (index) => {
    setSelectedCelebrity(index);
    document.body.classList.add('modal-open');
  };

  const handleCloseModal = () => {
    setSelectedCelebrity(null);
    document.body.classList.remove('modal-open');
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredCelebrities = celebrities.filter((celebrity) =>
    celebrity.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Celebrity Cards</h1>
      <input
        type="text"
        placeholder="Search celebrities..."
        value={searchQuery}
        onChange={handleSearch}
      />
      <CelebrityCardList celebrities={filteredCelebrities} onCardClick={handleCardClick} />
      {selectedCelebrity !== null && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={handleCloseModal}>×</span>
            <h2>{filteredCelebrities[selectedCelebrity].name}</h2>
            <p>{filteredCelebrities[selectedCelebrity].description}</p>
            <div className="nav-btns">
              <button onClick={handlePrevCelebrity}>Previous</button>
              <button onClick={handleNextCelebrity}>Next</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

};
export default App;