import { useState } from "react";
import styles from "../styles/ReligionForm.module.css";

const ReligionForm = () => {
  const [religions, setReligions] = useState([]);
  const [religionName, setReligionName] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const handleSave = () => {
    if (religionName.trim()) {
      if (editingIndex !== null) {
        const updatedReligions = [...religions];
        updatedReligions[editingIndex] = religionName.trim();
        setReligions(updatedReligions);
        setEditingIndex(null);
      } else {
        setReligions([...religions, religionName.trim()]);
      }
      setReligionName("");
    }
  };

  const handleEdit = (index) => {
    setReligionName(religions[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    setReligions(religions.filter((_, i) => i !== index));
  };

  return (
    <div className={styles.container}>
      {/* Religions List */}
      <div className={styles.listContainer}>
        <h2>All Religions</h2>
        {religions.length === 0 ? (
          <div className={styles.emptyState}>
            <p>Nothing Found</p>
          </div>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {religions.map((religion, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{religion}</td>
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

      {/* Add/Edit Religion */}
      <div className={styles.formContainer}>
        <h2>{editingIndex !== null ? "Edit Religion" : "Add New Religion"}</h2>
        <input
          type="text"
          value={religionName}
          onChange={(e) => setReligionName(e.target.value)}
          placeholder="Religion Name"
          className={styles.input}
        />
        <button onClick={handleSave} className={styles.saveButton}>
          {editingIndex !== null ? "Update" : "Save"}
        </button>
      </div>
    </div>
  );
};

export default ReligionForm;
