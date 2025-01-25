import { useState } from "react";
import styles from "../styles/Members.module.css";
import initialGrooms from "../data"; // Assume you have a separate data file for grooms
import Popup from "./Popup";

const Grooms = () => {
  const [grooms, setGrooms] = useState(initialGrooms); // Use initialGrooms for the new data
  const [menuVisible, setMenuVisible] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [newGroom, setNewGroom] = useState({
    name: "",
    gender: "Male",
    code: "",
    status: "Active",
    email: "",
    dateOfBirth: "",
    onBehalf: "",
    package: "",
    photo: null,
    password: "",
    confirmPassword: "",
    groomVerified: false, // Groom-specific field
  });

  const handleMenuToggle = (id) => {
    setMenuVisible(menuVisible === id ? null : id);
  };

  const handleViewGroom = (id) => {
    alert(`View details of groom ID: ${id}`);
  };

  const handleDeleteGroom = (id) => {
    setGrooms(grooms.filter((groom) => groom.id !== id));
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setNewGroom({
      name: "",
      gender: "Male",
      code: "",
      status: "Active",
    });
  };

  const handleSaveGroom = () => {
    if (newGroom.name && newGroom.gender && newGroom.code) {
      setGrooms([
        ...grooms,
        {
          id: grooms.length + 1,
          image: null,
          ...newGroom,
          reports: 0,
          joinedDate: new Date().toLocaleDateString(),
        },
      ]);
      handleCloseModal();
    } else {
      alert("Please fill in all fields!");
    }
  };

  const filteredGrooms = grooms.filter((groom) => {
    const matchesSearch =
      groom.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      groom.code.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      filterStatus === "All" || groom.status === filterStatus;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Grooms</h2>
        <div className={styles.actions}>
          <input
            type="text"
            placeholder="Search grooms..."
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
            <button className={styles.addButton}>Add New Groom</button>
          </a>
        </div>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Groom Code</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Profile Reported</th>
            <th>Groom Since</th>
            <th>Groom Status</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {filteredGrooms.map((groom) => (
            <tr key={groom.id}>
              <td>{groom.id}</td>
              <td>
                <div className={styles.imagePlaceholder}></div>
              </td>
              <td>{groom.code}</td>
              <td>{groom.name}</td>
              <td>{groom.gender}</td>
              <td>{groom.reports}</td>
              <td>{groom.joinedDate}</td>
              <td>
                <span
                  className={`${styles.status} ${
                    groom.status === "Active" ? styles.active : styles.inactive
                  }`}
                >
                  {groom.status}
                </span>
              </td>
              <td>
                <div className={styles.optionsContainer}>
                  <button
                    className={styles.optionsButton}
                    onClick={() => handleMenuToggle(groom.id)}
                  >
                    ...
                  </button>
                  {menuVisible === groom.id && (
                    <div className={styles.dropdownMenu}>
                      <button
                        onClick={() => handleViewGroom(groom.id)}
                        className={styles.menuItem}
                      >
                        View
                      </button>
                      <button
                        onClick={() => handleDeleteGroom(groom.id)}
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
          newMember={newGroom}
          setNewMember={setNewGroom}
          onSave={handleSaveGroom}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Grooms;
