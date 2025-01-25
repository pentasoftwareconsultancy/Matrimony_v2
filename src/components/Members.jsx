import { useState } from "react";
import styles from "../styles/Members.module.css";
import initialMembers from "../data";
import Popup from "./Popup";

const Members = () => {
  const [members, setMembers] = useState(initialMembers);
  const [menuVisible, setMenuVisible] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [newMember, setNewMember] = useState({
    name: "",
    gender: "",
    code: "",
    status: "Active",
    email: "",
    dateOfBirth: "",
    onBehalf: "",
    package: "",
    photo: null,
    password: "",
    confirmPassword: "",
    memberVerified: false,
  });
  const handleDownloadReport = () => {
    const csvHeader = [
      "ID",
      "Name",
      "Gender",
      "Code",
      "Status",
      "Email",
      "Date of Birth",
      "On Behalf",
      "Package",
      "Reports",
      "Joined Date",
      "Verified",
    ];
    
    const csvRows = members.map((member) => [
      member.id,
      member.name,
      member.gender,
      member.code,
      member.status,
      member.email || "",
      member.dateOfBirth || "",
      member.onBehalf || "",
      member.package || "",
      member.reports || 0,
      member.joinedDate || "",
      member.memberVerified ? "Yes" : "No",
    ]);
  
    const csvContent = [
      csvHeader.join(","),
      ...csvRows.map((row) => row.map((value) => `"${value}"`).join(",")),
    ].join("\n");
  
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "members_report.csv";
    a.click();
    URL.revokeObjectURL(url);
  };
  

  const handleMenuToggle = (id) => {
    setMenuVisible(menuVisible === id ? null : id);
  };

  const handleViewMember = (id) => {
    alert(`View details of member ID: ${id}`);
  };

  const handleDeleteMember = (id) => {
    setMembers(members.filter((member) => member.id !== id));
  };

  // const handleAddMemberClick = () => {
  //   setIsModalOpen(true);
  // };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setNewMember({
      name: "",
      gender: "",
      code: "",
      status: "Active",
    });
  };

  const handleSaveMember = () => {
    if (newMember.name && newMember.gender && newMember.code) {
      setMembers([
        ...members,
        {
          id: members.length + 1,
          image: null,
          ...newMember,
          reports: 0,
          joinedDate: new Date().toLocaleDateString(),
        },
      ]);
      handleCloseModal();
    } else {
      alert("Please fill in all fields!");
    }
  };

  const filteredMembers = members.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.code.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      filterStatus === "All" || member.status === filterStatus;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Members</h2>
        <div className={styles.actions}>
          <input
            type="text"
            placeholder="Search members..."
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
          {/* <button className={styles.addButton} onClick={handleAddMemberClick}>
            Add New Member
          </button> */}
         <a href="/step"> <button className={styles.addButton} >
            Add New Member
          </button></a>
        </div>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Member Code</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Profile Reported</th>
            <th>Member Since</th>
            <th>Member Status</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {filteredMembers.map((member) => (
            <tr key={member.id}>
              <td>{member.id}</td>
              <td>
                <div className={styles.imagePlaceholder}></div>
              </td>
              <td>{member.code}</td>
              <td>{member.name}</td>
              <td>{member.gender}</td>
              <td>{member.reports}</td>
              <td>{member.joinedDate}</td>
              <td>
                <span
                  className={`${styles.status} ${
                    member.status === "Active"
                      ? styles.active
                      : styles.inactive
                  }`}
                >
                  {member.status}
                </span>
              </td>
              <td>
                <div className={styles.optionsContainer}>
                  <button
                    className={styles.optionsButton}
                    onClick={() => handleMenuToggle(member.id)}
                  >
                    ...
                  </button>
                  {menuVisible === member.id && (
                    <div className={styles.dropdownMenu}>
                      <button
                        onClick={() => handleViewMember(member.id)}
                        className={styles.menuItem}
                      >
                        View
                      </button>
                      <button
                        onClick={() => handleDeleteMember(member.id)}
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
      <button className={styles.reportButton} onClick={handleDownloadReport}>
    Download Report
  </button>
      {isModalOpen && (
        <Popup
          newMember={newMember}
          setNewMember={setNewMember}
          onSave={handleSaveMember}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Members;
