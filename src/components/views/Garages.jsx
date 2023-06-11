import { useState } from "react";
import { dataGarages } from '../../data/dt-garages';
import { Finder } from '../interface/Finder';

export function Garages() {
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

      <h1 className="garages-title"><span className="highlight-container"><span className="highlight">Talleres cercanos</span></span></h1>

      <main className="garages">
        {(isSearching ? filteredItems : dataGarages).map(function (item, i) {
          return (
            <div className="garage" key={i}>
              <h2>{item.name}</h2>
            </div>
          );
        })}
      </main>
    </section>
  );
};
