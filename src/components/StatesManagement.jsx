import  { useState } from "react";
import styles from "../styles/StatesManagement.module.css";

const StatesManagement = () => {
  const [states, setStates] = useState([
    { id: 1, name: "Andaman and Nicobar Islands", country: "India" },
    { id: 2, name: "Andhra Pradesh", country: "India" },
    { id: 3, name: "Arunachal Pradesh", country: "India" },
    { id: 4, name: "Assam", country: "India" },
    { id: 5, name: "Bihar", country: "India" },
  ]);

  const [newState, setNewState] = useState({ name: "", country: "" });

  const handleAddState = () => {
    if (newState.name && newState.country) {
      setStates([...states, { id: states.length + 1, ...newState }]);
      setNewState({ name: "", country: "" });
    }
  };

  const handleDeleteState = (id) => {
    setStates(states.filter((state) => state.id !== id));
  };

  return (
    <div className={styles.container}>
      <div className={styles.statesSection}>
        <h3>All States</h3>
        <input
          type="text"
          placeholder="Type name & Enter"
          className={styles.searchInput}
        />
        <table className={styles.table}>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Country</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {states.map((state) => (
              <tr key={state.id}>
                <td>{state.id}</td>
                <td>{state.name}</td>
                <td>{state.country}</td>
                <td>
                  <button className={styles.editButton}>✏️</button>
                  <button
                    className={styles.deleteButton}
                    onClick={() => handleDeleteState(state.id)}
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.addStateSection}>
        <h3>Add New State</h3>
        <label>
          Country
          <select
            value={newState.country}
            onChange={(e) =>
              setNewState({ ...newState, country: e.target.value })
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
          State Name
          <input
            type="text"
            value={newState.name}
            onChange={(e) =>
              setNewState({ ...newState, name: e.target.value })
            }
            className={styles.input}
          />
        </label>
        <button onClick={handleAddState} className={styles.saveButton}>
          Save
        </button>
      </div>
    </div>
  );
};

export default StatesManagement;
