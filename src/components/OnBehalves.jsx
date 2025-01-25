import { useState } from "react";
import styles from "../styles/OnBehalves.module.css";

const OnBehalves = () => {
  const [onBehalves, setOnBehalves] = useState([]);
  const [name, setName] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleSave = () => {
    if (name.trim()) {
      if (editIndex !== null) {
        const updatedOnBehalves = [...onBehalves];
        updatedOnBehalves[editIndex] = name;
        setOnBehalves(updatedOnBehalves);
        setEditIndex(null);
      } else {
        setOnBehalves([...onBehalves, name]);
      }
      setName("");
    }
  };

  const handleEdit = (index) => {
    setName(onBehalves[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setOnBehalves(onBehalves.filter((_, i) => i !== index));
  };

  return (
    <div className={styles.container}>
      {/* On Behalves List */}
      <div className={styles.listContainer}>
        <h2>All On Behalves</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {onBehalves.length > 0 ? (
              onBehalves.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item}</td>
                  <td className={styles.options}>
                    <button
                      className={styles.editButton}
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </button>
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
                  Nothing Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add/Edit On Behalf */}
      <div className={styles.formContainer}>
        <h2>{editIndex !== null ? "Edit On Behalf" : "Add New On Behalf"}</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
          className={styles.input}
        />
        <button onClick={handleSave} className={styles.saveButton}>
          Save
        </button>
      </div>
    </div>
  );
};

export default OnBehalves;
