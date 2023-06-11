import { useEffect, useState } from "react";
import { dataGarages } from '../../data/dt-garages';

export function Feed() {
  const [isSearching, setIsSearching] = useState(false);
  const [filteredItems, setFilteredItems] = useState(dataGarages);

  function lookFor(e) {
    setFilteredItems(dataGarages.filter(function (item) {
      item.name.toLowerCase().includes(e.target.value.toLowerCase());
    }));
    setIsSearching(true);
  }

  return (
    <section className="container-garages">
      <h1 className="garages-title">Talleres cercanos</h1>
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
