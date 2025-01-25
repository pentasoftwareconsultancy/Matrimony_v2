import { useState } from "react";
import styles from "../styles/ProfileSectionsConfig.module.css";

const ProfileSectionsConfig = () => {
  const [sections, setSections] = useState([
    { name: "Present Address", enabled: true },
    { name: "Education", enabled: true },
    { name: "Career", enabled: true },
    { name: "Physical Attributes", enabled: true },
    { name: "Language", enabled: true },
    { name: "Hobbies And Interests", enabled: true },
    { name: "Personal Attitude And Behavior", enabled: true },
    { name: "Residency Information", enabled: true },
    { name: "Spiritual And Social Background", enabled: true },
    { name: "Life Style", enabled: true },
    { name: "Astronomic Information", enabled: true },
  ]);

  const toggleSection = (index) => {
    const updatedSections = [...sections];
    updatedSections[index].enabled = !updatedSections[index].enabled;
    setSections(updatedSections);
  };

  return (
    <div className={styles.container}>
      <h2>Member Profile Sections Configuration</h2>
      <ul className={styles.list}>
        {sections.map((section, index) => (
          <li key={index} className={styles.listItem}>
            <label className={styles.label}>
              <input
                type="checkbox"
                checked={section.enabled}
                onChange={() => toggleSection(index)}
                className={styles.checkbox}
              />
              {section.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileSectionsConfig;
