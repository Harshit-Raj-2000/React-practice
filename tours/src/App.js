import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// import data from "./data";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  return (
    <main>
      {loading && <Loading />}
      {!loading && tours.length > 0 && (
        <Tours tours={tours} removeTour={removeTour} />
      )}
      {!loading && tours.length === 0 && (
        <div className="title">
          <h2>No Tours Left</h2>
          <button className="btn" onClick={fetchTours}>
            Refresh
          </button>
        </div>
      )}
    </main>
  );
}

export default App;
