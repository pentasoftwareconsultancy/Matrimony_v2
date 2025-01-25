
import styles from "../../styles/Horoscope.module.css";

const Horoscope = ({ formData, setFormData }) => {
  const horoscope = [
    { label: "Rashi", type: "select", key: "rashi", options: ["Unspecified", "Mesh", "Vrishabh", "Mithun", "Kark", "Singh", "Kanya", "Tula", "Vrischik", "Dhanu", "Makar", "Kumbh", "Meen"] },
    { label: "Nakshatra", type: "select", key: "nakshatra", options: ["Unspecified", "Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashira", "Ardra", "Punarvasu", "Pushya", "Ashlesha"] },
    { label: "Charan", type: "select", key: "charan", options: ["Unspecified", "1", "2", "3", "4"] },
    { label: "Gan", type: "select", key: "gan", options: ["Unspecified", "Dev", "Manushya", "Rakshas"] },
    { label: "Nadi", type: "select", key: "nadi", options: ["Unspecified", "Aadi", "Madhya", "Antya"] },
    { label: "Mangal", type: "select", key: "mangal", options: ["No", "Yes", "Partial"] },
    { label: "*Birth Time (It's important)", type: "time", key: "birthTime" },
    { label: "*Birth District (It's important)", type: "select", key: "birthDistrict", options: ["Select", "District 1", "District 2", "District 3"] },
    { label: "Devak", type: "text", key: "devak" },
  ];

  const handleChange = (key, value) => {
    setFormData((prevData) => ({
      ...prevData,
      horoscope: {
        ...prevData.horoscope,
        [key]: value,
      },
    }));
  };

  return (
    <form className={styles.horoscopeForm}>
      <h2>Horoscope Details</h2>
      <div className={styles.formGrid}>
        {horoscope.map((field) => (
          <div className={styles.formGroup} key={field.key}>
            <label>{field.label}</label>
            {field.type === "select" ? (
              <select
                value={formData.horoscope?.[field.key] || ""}
                onChange={(e) => handleChange(field.key, e.target.value)}
              >
                {field.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                value={formData.horoscope?.[field.key] || ""}
                onChange={(e) => handleChange(field.key, e.target.value)}
              />
            )}
          </div>
        ))}
      </div>
      {/* <button type="button" className={styles.nextButton}>
        Next
      </button> */}
    </form>
  );
};

export default Horoscope;
