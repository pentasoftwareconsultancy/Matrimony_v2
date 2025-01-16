import styles from "../../styles/FamilyBack.module.css";

const FamilyBackground = ({ formData, setFormData }) => {
  const familyFields = [
    { label: "Mother", type: "text", key: "mother" },
    { label: "Brothers", type: "number", key: "brothers" },
    { label: "Married Brothers", type: "number", key: "marriedBrothers" },
    { label: "Father", type: "text", key: "father" },
    { label: "Sisters", type: "number", key: "sisters" },
    { label: "Married Sisters", type: "number", key: "marriedSisters" },
    { label: "Parents Fullname", type: "text", key: "parentsFullname" },
    { label: "Parents Occupation", type: "text", key: "parentsOccupation" },
    { label: "Parents Resident City", type: "text", key: "parentsResidentCity" },
    { label: "Surnames of Relatives", type: "textarea", key: "surnamesOfRelatives" },
    { label: "Family Wealth (e.g., Flat, Agri land, etc.)", type: "text", key: "familyWealth" },
    { label: "Native District (It's important)", type: "select", key: "nativeDistrict", options: ["District 1", "District 2", "District 3"] },
    { label: "Native Taluka, If Any", type: "text", key: "nativeTaluka" },
    { label: "Mama's Surname / Place", type: "text", key: "mamasSurname" },
    { label: "Any Intercast Marriage in Core Family", type: "select", key: "intercastMarriage", options: ["Yes", "No"] },
    { label: "If yes (Relation/Caste)", type: "text", key: "relationCaste" },
  ];

  const handleChange = (key, value) => {
    setFormData((prevData) => ({
      ...prevData,
      familyBackground: { ...prevData.familyBackground, [key]: value },
    }));
  };

  const renderField = (field) => {
    const value = formData.familyBackground?.[field.key] || "";
    if (field.type === "select") {
      return (
        <select value={value} onChange={(e) => handleChange(field.key, e.target.value)}>
          <option value="">Select</option>
          {field.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      );
    }
    if (field.type === "textarea") {
      return <textarea value={value} onChange={(e) => handleChange(field.key, e.target.value)} />;
    }
    return <input type={field.type} value={value} onChange={(e) => handleChange(field.key, e.target.value)} />;
  };

  return (
    <form className={styles.familyBackgroundForm}>
      <h2>Family Background</h2>
      <div className={styles.formGrid}>
        {familyFields.map((field) => (
          <div className={styles.formGroup} key={field.key}>
            <label>{field.label}</label>
            {renderField(field)}
          </div>
        ))}
      </div>
    </form>
  );
};

export default FamilyBackground;
