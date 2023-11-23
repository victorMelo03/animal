import React, { useState } from 'react';
import './App.css';

function App() {
  const [dogs, setDogs] = useState([]);
  const [animalType, setAnimalType] = useState(''); // New state for animal type
  const [dogName, setDogName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [dogImage, setDogImage] = useState('');
  const [breed, setBreed] = useState('');
  const [lostDate, setLostDate] = useState('');
  const [status, setStatus] = useState('perdido');

  const addDog = () => {
    if (dogName && ownerName && contactInfo && dogImage && breed && lostDate) {
      const newDog = {
        id: dogs.length + 1,
        animalType, // Include animal type in the object
        dogName,
        ownerName,
        contactInfo,
        dogImage,
        breed,
        lostDate,
        status,
      };

      setDogs([...dogs, newDog]);
      setAnimalType(''); // Reset the animal type
      setDogName('');
      setOwnerName('');
      setContactInfo('');
      setDogImage('');
      setBreed('');
      setLostDate('');
      setStatus('perdido');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  const removeDog = (id) => {
    const updatedDogs = dogs.filter((dog) => dog.id !== id);
    setDogs(updatedDogs);
  };

  const updateStatus = (id, newStatus) => {
    const updatedDogs = dogs.map((dog) =>
      dog.id === id ? { ...dog, status: newStatus } : dog
    );
    setDogs(updatedDogs);
  };

  return (
    <div className="App">
      <h1>Cadastro de Animais Perdidos/Resgatados</h1>

      <div>
        <label>Tipo de Animal:</label>
        <input
          type="text"
          value={animalType}
          onChange={(e) => setAnimalType(e.target.value)}
        />
      </div>

      <div>
        <label>Nome do Animal:</label>
        <input
          type="text"
          value={dogName}
          onChange={(e) => setDogName(e.target.value)}
        />
      </div>

      <div>
        <label>Nome do Dono:</label>
        <input
          type="text"
          value={ownerName}
          onChange={(e) => setOwnerName(e.target.value)}
        />
      </div>

      <div>
        <label>Informações de Contato e do Animal:</label>
        <input
          type="text"
          value={contactInfo}
          onChange={(e) => setContactInfo(e.target.value)}
        />
      </div>

      <div>
        <label>URL da Imagem do Animal:</label>
        <input
          type="text"
          value={dogImage}
          onChange={(e) => setDogImage(e.target.value)}
        />
      </div>

      <div>
        <label>Raça do Animal:</label>
        <input
          type="text"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
        />
      </div>

      <div>
        <label>Data em que foi perdido ou achado:</label>
        <input
          type="text"
          value={lostDate}
          onChange={(e) => setLostDate(e.target.value)}
          placeholder="Formato: DD/MM/AAAA"
        />
      </div>

      <div>
        <label>Status:</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="perdido">Perdido</option>
          <option value="resgatado">Resgatado</option>
        </select>
      </div>

      <button onClick={addDog}>Cadastrar</button>

      <ul>
        {dogs.map((dog) => (
          <li key={dog.id}>
            <strong>Tipo de Animal:</strong> {dog.animalType}<br />
            <strong>Nome do Animal:</strong> {dog.dogName}<br />
            <strong>Nome do Dono:</strong> {dog.ownerName}<br />
            <strong>Informações de Contato:</strong> {dog.contactInfo}<br />
            <strong>Imagem do Animal:</strong> <br />
            <img src={dog.dogImage} alt={dog.dogName} style={{ maxWidth: '200px' }} /><br />
            <strong>Raça:</strong> {dog.breed}<br />
            <strong>Data em que foi perdido ou achado:</strong> {dog.lostDate}<br />
            <strong>Status:</strong> {dog.status}<br />
            <button onClick={() => removeDog(dog.id)}>Descadastrar</button>
            <button onClick={() => updateStatus(dog.id, 'pendente')}>Pendente</button>
            <button onClick={() => updateStatus(dog.id, 'concluído')}>Concluído</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;



