import { useState } from "react";
import styles from "../styles/AddMemberForm.module.css";

const AddMemberForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    gender: "",
    dateOfBirth: "",
    onBehalf: "",
    package: "",
    photo: null,
    password: "",
    confirmPassword: "",
    memberVerified: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation and submission logic here
    console.log(formData);
    alert("Form submitted!");
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label>Gender *</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <label>Date of Birth *</label>
        <input
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label>On Behalf *</label>
        <select
          name="onBehalf"
          value={formData.onBehalf}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="Myself">Myself</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <label>Package *</label>
        <select
          name="package"
          value={formData.package}
          onChange={handleChange}
          required
        >
          <option value="">Select Package</option>
          <option value="Default">Default</option>
          <option value="Premium">Premium</option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <label>Photo (800x800)</label>
        <input
          type="file"
          name="photo"
          accept="image/*"
          onChange={handleChange}
        />
      </div>

      <div className={styles.formGroup}>
        <label>Password *</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label>Confirm Password *</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label>Member Verified</label>
        <label className={styles.toggleSwitch}>
          <input
            type="checkbox"
            name="memberVerified"
            checked={formData.memberVerified}
            onChange={handleChange}
          />
          <span className={styles.slider}></span>
        </label>
      </div>

      <button type="submit" className={styles.submitButton}>
        Add Member
      </button>
    </form>
  );
};

export default AddMemberForm;
