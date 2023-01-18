import React, {useState} from 'react';
import Table from './Table';

function MyApp() {
    const [characters, setCharacters] = useState([
        {
            name: 'Charlie',
            job: 'Call of Duty',
          },
          {
            name: 'Mac',
            job: 'Bouncer',
          },
          {
            name: 'DeeDee',
            job: 'Aspring actress',
          },
          {
            name: 'Dennis',
            job: 'Bartender',
          },
      ]);  
  
    function removeOneCharacter (index) {
        const updated = characters.filter((character, i) => {
            return i !== index
        });
        setCharacters(updated);
    }

    return (
        <div className="container">
          <Table characterData={characters} removeCharacter={removeOneCharacter} />
        </div>
      )
}

export default MyApp;
