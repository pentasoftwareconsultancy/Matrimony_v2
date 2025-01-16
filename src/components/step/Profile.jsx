import styles from "../../styles/profile.module.css";

const Profile = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      profile: { ...prev.profile, [e.target.name]: e.target.value },
    }));
  };

  const fields = [
    { label: "First Name", type: "text", name: "firstName" },
    { label: "Middle Name", type: "text", name: "middleName" },
    { label: "Last Name", type: "text", name: "lastName" },
    { label: "Date of Birth", type: "date", name: "dob" },
    { label: "Height", type: "number", name: "height" },
    { label: "Weight", type: "number", name: "weight" },
    { label: "Personality", type: "textarea", name: "personality" },
  ];

  const dropdowns = [
    { label: "Sub Cast", name: "subCast", options: ["Select Sub Cast"] },
    { label: "Marital Status", name: "maritalStatus", options: ["Select", "Unmarried", "Married"] },
    { label: "Blood Group", name: "bloodGroup", options: ["Select", "A+", "B+", "O+"] },
    { label: "Complexion", name: "complexion", options: ["Select", "Fair", "Wheatish", "Dark"] },
    { label: "Physical Disabilities", name: "physicalDisabilities", options: ["Select", "No", "Yes"] },
    { label: "Diet", name: "diet", options: ["Select", "Veg", "Non-Veg"] },
    { label: "Spectacles", name: "spectacles", options: ["Select", "No", "Yes"] },
    { label: "Lens", name: "lens", options: ["Select", "No", "Yes"] },
  ];

  return (
    <div className={styles.profileContainer}>
      <h2>Personal Details</h2>
      {fields.map(({ label, type, name }) => (
        <div key={name} className={styles.formGroup}>
          <label htmlFor={name}>{label}:</label>
          {type === "textarea" ? (
            <textarea
              id={name}
              name={name}
              value={formData[name] || ""}
              onChange={handleChange}
              className={styles.textareaField}
            />
          ) : (
            <input
              type={type}
              id={name}
              name={name}
              value={formData[name] || ""}
              onChange={handleChange}
              className={styles.inputField}
            />
          )}
        </div>
      ))}
      {dropdowns.map(({ label, name, options }) => (
        <div key={name} className={styles.formGroup}>
          <label htmlFor={name}>{label}:</label>
          <select
            id={name}
            name={name}
            value={formData[name] || ""}
            onChange={handleChange}
            className={styles.selectField}
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};

export default Profile;
