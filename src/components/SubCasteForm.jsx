import { useState } from "react";
import styles from "../styles/SubCasteForm.module.css";

const SubCasteForm = () => {
  const [subCastes, setSubCastes] = useState([]);
  const [religion, setReligion] = useState("");
  const [caste, setCaste] = useState("");
  const [subCasteName, setSubCasteName] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const handleSave = () => {
    if (religion && caste && subCasteName.trim()) {
      if (editingIndex !== null) {
        const updatedSubCastes = [...subCastes];
        updatedSubCastes[editingIndex] = {
          religion,
          caste,
          name: subCasteName.trim(),
        };
        setSubCastes(updatedSubCastes);
        setEditingIndex(null);
      } else {
        setSubCastes([
          ...subCastes,
          { religion, caste, name: subCasteName.trim() },
        ]);
      }
      setReligion("");
      setCaste("");
      setSubCasteName("");
    }
  };

  const handleEdit = (index) => {
    setReligion(subCastes[index].religion);
    setCaste(subCastes[index].caste);
    setSubCasteName(subCastes[index].name);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    setSubCastes(subCastes.filter((_, i) => i !== index));
  };

  return (
    <div className={styles.container}>
      {/* Sub Castes List */}
      <div className={styles.listContainer}>
        <h2>All Sub Castes</h2>
        {subCastes.length === 0 ? (
          <div className={styles.emptyState}>
            <p>Nothing Found</p>
          </div>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>#</th>
                <th>Sub Caste</th>
                <th>Caste</th>
                <th>Religion</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {subCastes.map((subCaste, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{subCaste.name}</td>
                  <td>{subCaste.caste}</td>
                  <td>{subCaste.religion}</td>
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

      {/* Add/Edit Sub Caste */}
      <div className={styles.formContainer}>
        <h2>{editingIndex !== null ? "Edit Sub Caste" : "Add New Sub Caste"}</h2>
        <select
          value={religion}
          onChange={(e) => setReligion(e.target.value)}
          className={styles.select}
        >
          <option value="" disabled>
            Select Religion
          </option>
          <option value="Hindu">Hindu</option>
          <option value="Muslim">Muslim</option>
        </select>
        <select
          value={caste}
          onChange={(e) => setCaste(e.target.value)}
          className={styles.select}
        >
          <option value="" disabled>
            Select Caste
          </option>
          <option value="Brahmin">Brahmin</option>
          <option value="Kshatriya">Kshatriya</option>
        </select>
        <input
          type="text"
          value={subCasteName}
          onChange={(e) => setSubCasteName(e.target.value)}
          placeholder="Sub Caste Name"
          className={styles.input}
        />
        <button onClick={handleSave} className={styles.saveButton}>
          {editingIndex !== null ? "Update" : "Save"}
        </button>
      </div>
    </div>
  );
};

export default SubCasteForm;
