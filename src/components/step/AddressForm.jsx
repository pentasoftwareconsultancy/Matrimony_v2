
import styles from "./AddressForm.module.css";

const AddressForm = ({ formData, setFormData }) => {
  const handleChange = (key, value) => {
    setFormData((prevData) => ({
      ...prevData,
      address: {
        ...prevData.address,
        [key]: value,
      },
    }));
  };

  return (
    <form className={styles.addressForm}>
      <h2>Address</h2>
      <div className={styles.formGrid}>
        <div className={styles.formGroup}>
          <label>PAN / Adhar / Driving License / Passport No:</label>
          <input
            type="text"
            value={formData?.address?.documentId || ""}
            onChange={(e) => handleChange("documentId", e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Residence Address With City:</label>
          <textarea
            value={formData?.address?.residenceAddress || ""}
            onChange={(e) => handleChange("residenceAddress", e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label>
            <span className={styles.required}>*</span> E-mail ID (It's
            important):
          </label>
          <input
            type="email"
            value={formData?.address?.email || ""}
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label>
            <span className={styles.required}>*</span> Mobile For SMS Alert
            (Its important):
          </label>
          <input
            type="tel"
            value={formData?.address?.mobile || ""}
            onChange={(e) => handleChange("mobile", e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Mobile II:</label>
          <input
            type="tel"
            value={formData?.address?.mobile2 || ""}
            onChange={(e) => handleChange("mobile2", e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Phone I:</label>
          <input
            type="tel"
            value={formData?.address?.phone1 || ""}
            onChange={(e) => handleChange("phone1", e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Phone II:</label>
          <input
            type="tel"
            value={formData?.address?.phone2 || ""}
            onChange={(e) => handleChange("phone2", e.target.value)}
          />
        </div>
      </div>
    
    </form>
  );
};

export default AddressForm;
