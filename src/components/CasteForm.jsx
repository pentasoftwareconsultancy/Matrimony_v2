import { useState } from "react";
import styles from "../styles/CasteForm.module.css";

const CasteForm = () => {
  const [castes, setCastes] = useState([]);
  const [religion, setReligion] = useState("");
  const [casteName, setCasteName] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const handleSave = () => {
    if (religion.trim() && casteName.trim()) {
      if (editingIndex !== null) {
        const updatedCastes = [...castes];
        updatedCastes[editingIndex] = { religion, name: casteName.trim() };
        setCastes(updatedCastes);
        setEditingIndex(null);
      } else {
        setCastes([...castes, { religion, name: casteName.trim() }]);
      }
      setReligion("");
      setCasteName("");
    }
  };

  const handleEdit = (index) => {
    setReligion(castes[index].religion);
    setCasteName(castes[index].name);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    setCastes(castes.filter((_, i) => i !== index));
  };

  return (
    <div className={styles.container}>
      {/* Castes List */}
      <div className={styles.listContainer}>
        <h2>All Castes</h2>
        {castes.length === 0 ? (
          <div className={styles.emptyState}>
            <p>Nothing Found</p>
          </div>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Religion</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {castes.map((caste, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{caste.name}</td>
                  <td>{caste.religion}</td>
                  <td>
                    <button
                      className={styles.editButton}
                      onClick={() => handleEdit(index)}
                    >
                      ✏️
                    </button>
                    <button
                      className={styles.deleteButton}
                      onClick={() => handleDelete(index)}
                    >
                      🗑️
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Add/Edit Caste */}
      <div className={styles.formContainer}>
        <h2>{editingIndex !== null ? "Edit Caste" : "Add New Caste"}</h2>
        <select
          value={religion}
          onChange={(e) => setReligion(e.target.value)}
          className={styles.select}
        >
          <option value="" disabled>
            Select Religion
          </option>
          <option value="Muslim">Muslim</option>
          <option value="Hindu">Hindu</option>
        </select>
        <input
          type="text"
          value={casteName}
          onChange={(e) => setCasteName(e.target.value)}
          placeholder="Caste Name"
          className={styles.input}
        />
        <button onClick={handleSave} className={styles.saveButton}>
          {editingIndex !== null ? "Update" : "Save New Caste"}
        </button>
      </div>
    </div>
  );
};

export default CasteForm;
