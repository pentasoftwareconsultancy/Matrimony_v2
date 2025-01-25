import styles from "../../styles/Expectation.module.css";

const ExpectationForm = ({ formData, setFormData }) => {
  const fields = [
    { label: "Preferred Cities", key: "preferredCities", type: "text", placeholder: "Enter preferred cities" },
    { label: "Expected Caste", key: "expectedCaste", type: "select", options: ["Maratha", "Brahmin", "Kshatriya", "Vaishya", "Shudra"] },
    { label: "Expected Height (Feet)", key: "expectedHeightFeet", type: "number", placeholder: "Feet" },
    { label: "Expected Height (Inches)", key: "expectedHeightInches", type: "number", placeholder: "Inches" },
    { label: "Expected Education", key: "expectedEducation", type: "text", placeholder: "Enter expected education" },
    { label: "Expected Occupation & Income per Annum", key: "expectedOccupationIncome", type: "textarea", placeholder: "Enter occupation and income details" },
    { label: "Manglik", key: "manglik", type: "select", options: ["Yes", "No"] },
    { label: "Max Age Difference", key: "maxAgeDifference", type: "number", placeholder: "Enter age difference" },
    { label: "Divorcee", key: "divorcee", type: "radio", options: ["Yes", "No"] },
    { label: "Verification Code", key: "verificationCode", type: "text", placeholder: "Enter verification code" },
  ];

  const handleChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      expectations: { ...prev.expectations, [key]: value },
    }));
  };

  const renderField = (field) => {
    const value = formData.expectations?.[field.key] || "";
    if (field.type === "select") {
      return (
        <select value={value} onChange={(e) => handleChange(field.key, e.target.value)}>
          <option value="">Select</option>
          {field.options.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      );
    }
    if (field.type === "radio") {
      return (
        field.options.map((option) => (
          <label key={option} className={styles.radioGroup}>
            <input
              type="radio"
              value={option}
              checked={value === option}
              onChange={(e) => handleChange(field.key, e.target.value)}
            />
            {option}
          </label>
        ))
      );
    }
    if (field.type === "textarea") {
      return <textarea placeholder={field.placeholder} value={value} onChange={(e) => handleChange(field.key, e.target.value)} />;
    }
    return <input type={field.type} placeholder={field.placeholder} value={value} onChange={(e) => handleChange(field.key, e.target.value)} />;
  };

  return (
    <form className={styles.expectationForm}>
      <h2>Expectations</h2>
      <div className={styles.formGrid}>
        {fields.map((field) => (
          <div className={styles.formGroup} key={field.key}>
            <label>{field.label}</label>
            {renderField(field)}
          </div>
        ))}
      </div>
      <button type="submit" className={styles.submitButton}>Submit</button>
    </form>
  );
};

export default ExpectationForm;
