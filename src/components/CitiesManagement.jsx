import  { useState } from "react";
import styles from "../styles/CitiesManagement.module.css";

const CitiesManagement = () => {
  const [cities, setCities] = useState([
    { id: 1, name: "Bombuflat", state: "Andaman and Nicobar Islands", country: "India" },
    { id: 2, name: "Garacharma", state: "Andaman and Nicobar Islands", country: "India" },
    { id: 3, name: "Port Blair", state: "Andaman and Nicobar Islands", country: "India" },
    { id: 4, name: "Rangat", state: "Andaman and Nicobar Islands", country: "India" },
  ]);

  const [newCity, setNewCity] = useState({ name: "", state: "", country: "" });

  const handleAddCity = () => {
    if (newCity.name && newCity.state && newCity.country) {
      setCities([...cities, { id: cities.length + 1, ...newCity }]);
      setNewCity({ name: "", state: "", country: "" });
    }
  };

  const handleDeleteCity = (id) => {
    setCities(cities.filter((city) => city.id !== id));
  };

  return (
    <div className={styles.container}>
      <div className={styles.citiesSection}>
        <h3>All Cities</h3>
        <input
          type="text"
          placeholder="Type name & Enter"
          className={styles.searchInput}
        />
        <table className={styles.table}>
          <thead>
            <tr>
              <th>#</th>
              <th>City</th>
              <th>State</th>
              <th>Country</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {cities.map((city) => (
              <tr key={city.id}>
                <td>{city.id}</td>
                <td>{city.name}</td>
                <td>{city.state}</td>
                <td>{city.country}</td>
                <td>
                  <button className={styles.editButton}>✏️</button>
                  <button
                    className={styles.deleteButton}
                    onClick={() => handleDeleteCity(city.id)}
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.addCitySection}>
        <h3>Add New City</h3>
        <label>
          Country
          <select
            value={newCity.country}
            onChange={(e) =>
              setNewCity({ ...newCity, country: e.target.value })
            }
            className={styles.input}
          >
            <option value="">Select Country</option>
            <option value="Afghanistan">Afghanistan</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
          </select>
        </label>
        <label>
          State
          <select
            value={newCity.state}
            onChange={(e) =>
              setNewCity({ ...newCity, state: e.target.value })
            }
            className={styles.input}
          >
            <option value="">Select State</option>
            <option value="Andaman and Nicobar Islands">
              Andaman and Nicobar Islands
            </option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
          </select>
        </label>
        <label>
          City Name
          <input
            type="text"
            value={newCity.name}
            onChange={(e) =>
              setNewCity({ ...newCity, name: e.target.value })
            }
            className={styles.input}
          />
        </label>
        <button onClick={handleAddCity} className={styles.saveButton}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CitiesManagement;
