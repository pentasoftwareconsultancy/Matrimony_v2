import { useState } from "react";
import styles from "../styles/Brides.module.css"; // Update your CSS file accordingly
import initialBrides from "../data"; // Adjust data to include bride-related info
import Popup from "./Popup";

const Brides = () => {
  const [brides, setBrides] = useState(initialBrides);
  const [menuVisible, setMenuVisible] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [newBride, setNewBride] = useState({
    name: "",
    weddingDate: "",
    status: "Active",
    email: "",
    phoneNumber: "",
    location: "",
    photo: null,
    memberVerified: false,
  });

  const handleMenuToggle = (id) => {
    setMenuVisible(menuVisible === id ? null : id);
  };

  const handleViewBride = (id) => {
    alert(`View details of bride ID: ${id}`);
  };

  const handleDeleteBride = (id) => {
    setBrides(brides.filter((bride) => bride.id !== id));
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setNewBride({
      name: "",
      weddingDate: "",
      status: "Active",
    });
  };

  const handleSaveBride = () => {
    if (newBride.name && newBride.weddingDate) {
      setBrides([
        ...brides,
        {
          id: brides.length + 1,
          image: null,
          ...newBride,
          joinedDate: new Date().toLocaleDateString(),
        },
      ]);
      handleCloseModal();
    } else {
      alert("Please fill in all fields!");
    }
  };

  const filteredBrides = brides.filter((bride) => {
    const matchesSearch =
      bride.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bride.email.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      filterStatus === "All" || bride.status === filterStatus;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Brides</h2>
        <div className={styles.actions}>
          <input
            type="text"
            placeholder="Search brides..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className={styles.filterDropdown}
          >
            <option value="All">All</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
          <a href="/step">
            <button className={styles.addButton}>Add New Bride</button>
          </a>
        </div>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Bridal Code</th>
            <th>Name</th>
            <th>Wedding Date</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {filteredBrides.map((bride) => (
            <tr key={bride.id}>
              <td>{bride.id}</td>
              <td>
                <div className={styles.imagePlaceholder}></div>
              </td>
              <td>{bride.code}</td>
              <td>{bride.name}</td>
              <td>{bride.weddingDate}</td>
              <td>{bride.phoneNumber}</td>
              <td>
                <span
                  className={`${styles.status} ${
                    bride.status === "Active"
                      ? styles.active
                      : styles.inactive
                  }`}
                >
                  {bride.status}
                </span>
              </td>
              <td>
                <div className={styles.optionsContainer}>
                  <button
                    className={styles.optionsButton}
                    onClick={() => handleMenuToggle(bride.id)}
                  >
                    ...
                  </button>
                  {menuVisible === bride.id && (
                    <div className={styles.dropdownMenu}>
                      <button
                        onClick={() => handleViewBride(bride.id)}
                        className={styles.menuItem}
                      >
                        View
                      </button>
                      <button
                        onClick={() => handleDeleteBride(bride.id)}
                        className={styles.menuItem}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen && (
        <Popup
          newBride={newBride}
          setNewBride={setNewBride}
          onSave={handleSaveBride}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Brides;
