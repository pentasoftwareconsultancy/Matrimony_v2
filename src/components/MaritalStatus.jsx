import { useState } from "react";
import styles from "../styles/MaritalStatus.module.css";

const MaritalStatus = () => {
  const [statuses, setStatuses] = useState([]);
  const [statusName, setStatusName] = useState("");

  const handleAddStatus = () => {
    if (statusName.trim()) {
      setStatuses([...statuses, statusName]);
      setStatusName("");
    }
  };

  const handleDeleteStatus = (index) => {
    setStatuses(statuses.filter((_, i) => i !== index));
  };

  return (
    <div className={styles.container}>
      {/* All Marital Status */}
      <div className={styles.statusList}>
        <h2>All Marital Status</h2>
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
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {statuses.length > 0 ? (
              statuses.map((status, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{status}</td>
                  <td>
                    <button
                      className={styles.deleteButton}
                      onClick={() => handleDeleteStatus(index)}
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

      {/* Add New Marital Status */}
      <div className={styles.addStatus}>
        <h2>Add New Marital Status</h2>
        <input
          type="text"
          value={statusName}
          onChange={(e) => setStatusName(e.target.value)}
          placeholder="Name"
          className={styles.input}
        />
        <button onClick={handleAddStatus} className={styles.addButton}>
          Save
        </button>
      </div>
    </div>
  );
};

export default MaritalStatus;
