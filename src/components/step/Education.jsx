import styles from "./education.module.css";

const Education = ({ formData, setFormData }) => {
  const { degree, university, year } = formData.education;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      education: { ...prev.education, [e.target.name]: e.target.value },
    }));
  };

  return (
    <div className={styles.educationContainer}>
      <h2>Education Information</h2>
      <form>
        <label>Degree</label>
        <input
          type="text"
          name="degree"
          value={degree}
          onChange={handleChange}
          placeholder="Enter your degree"
        />
        <label>University</label>
        <input
          type="text"
          name="university"
          value={university}
          onChange={handleChange}
          placeholder="Enter your university"
        />
        <label>Year of Graduation</label>
        <input
          type="text"
          name="year"
          value={year}
          onChange={handleChange}
          placeholder="Enter your graduation year"
        />
      </form>
    </div>
  );
};

export default Education;
