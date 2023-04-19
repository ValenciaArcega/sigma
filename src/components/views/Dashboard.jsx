import { useState } from "react";
import { dashboardCards } from "../../data/dashboard";

const Dashboard = () => {
  const [fecha, setFecha] = useState('Sin fecha reciente');

  return (
    <section className="container-dashboard">
      <header className="dashboard-header"><h1>Mis tiempos</h1></header>

      <main className="dashboard-main">
        {dashboardCards.map((el, i) => {
          return (
            <div className="dashboard-card" key={i}>
              <h4 className="dashboard-card-title">{el.name}</h4>
              <p className="dashboard-card-description">{el.description}</p>
              <h3 className="dashboard-card-date"><span className="gradient">{fecha}</span></h3>
            </div>
          );
        })}
      </main>
    </section>
  );
};

export default Dashboard;