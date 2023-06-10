import { useEffect, useState } from "react";
import { dashboardCards } from "../../data/dashboard";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { firebaseApp } from "../../credentials";

export function Dashboard({ userMail }) {
  const firestore = getFirestore(firebaseApp);
  const [name, setName] = useState(null);

  function fixName(str) {
    return str.trim().split(' ')[0];
  }

  useEffect(() => {
    (async function getUserName() {
      const docRef = doc(firestore, `users/${userMail}`);
      const query = await getDoc(docRef);
      if (query.exists()) {
        const infoDoc = query.data();
        // get data from firebase
        const fullName = infoDoc.data[0].name;
        const finalName = fixName(fullName);
        setName(finalName);
      }
    })();
  }, []);

  return (
    <section className="container-dashboard">
      <header className="dashboard-header"><h1><span className="gradient">Hola {name}</span></h1></header>

      <main className="dashboard-main">
        {dashboardCards.map((el, i) => {
          return (
            <div className="dashboard-card" key={i}>
              <h4 className="dashboard-card-title">{el.name}</h4>
              <p className="dashboard-card-description">{el.description}</p>
              {/* <h3 className="dashboard-card-date"><span className="gradient">{fecha}</span></h3> */}
            </div>
          );
        })}
      </main>
    </section>
  );
};
