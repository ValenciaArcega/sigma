import { useState } from "react";
import { dataGarages } from '../../data/dt-garages';
import { Finder } from '../interface/Finder';
import { useNavigate } from 'react-router-dom';
import { IconTools } from '../svg/Garages';


export function Garages() {
  const navigate = useNavigate();
  const [filteredItems, setFilteredItems] = useState(dataGarages);
  const [isSearching, setIsSearching] = useState(false);

  function lookFor(e) {
    setIsSearching(true);
    setFilteredItems(dataGarages.filter(function (item) {
      return item.name.toLowerCase().includes(e.target.value.toLowerCase());
    }));
  }

  return (
    <section className="container-garages">

      <Finder lookFor={lookFor} setIsSearching={setIsSearching} />

      <h1 className="garages-title"><span className="highlight-container"><span className="highlight">Talleres</span></span></h1>

      <main className="garages">
        {(isSearching ? filteredItems : dataGarages).map(function (item, i) {
          return (
            <div className="garage" key={i}>

              <div className="garage-header">
                <IconTools />
                <h2 className="garage-h2">{item.name}</h2>
              </div>

              <button className="garage-button" onClick={() => navigate('/sigma/garages/specific', { state: item })}>
                Ver detalles
              </button>

            </div>
          );
        })}
      </main>
    </section >
  );
};
