import { useState } from "react";
import styles from "../styles/FamilyValues.module.css";

const FamilyValues = () => {
  const [familyValues, setFamilyValues] = useState([]);
  const [name, setName] = useState("");

  const handleSave = () => {
    if (name.trim()) {
      setFamilyValues([...familyValues, name]);
      setName("");
    }
  };

  const handleDelete = (index) => {
    setFamilyValues(familyValues.filter((_, i) => i !== index));
  };

  return (
    <div className={styles.container}>
      {/* Family Values List */}
      <div className={styles.listContainer}>
        <h2>All Family Values</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {familyValues.length > 0 ? (
              familyValues.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item}</td>
                  <td>
                    <button
                      className={styles.deleteButton}
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className={styles.emptyState}>
                  <div className={styles.emptyContent}>
                    <span className={styles.sadFace}>☹</span>
                    <p>Nothing Found</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add New Family Value */}
      <div className={styles.formContainer}>
        <h2>Add New Family Value</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Family Value Name"
          className={styles.input}
        />
        <button onClick={handleSave} className={styles.saveButton}>
          Save New Family Value
        </button>
      </div>
    </div>
  );
};

export default FamilyValues;
