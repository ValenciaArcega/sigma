import { useLocation } from "react-router-dom";

export function Garage() {
  const location = useLocation();
  const objetoInfo = location.state;

  return (
    <section className="container-garageInfoCard">
      <h1 className="garageInfoCard-h1"><span className="highlight-container"><span className="highlight">{objetoInfo.name}</span></span></h1>
    </section>
  );
}