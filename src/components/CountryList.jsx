import  { useState } from "react";
import styles from "../styles/CountryList.module.css";

const CountryList = () => {
  const countries = [
    { id: 4, name: "American Samoa", code: "AS" },
    { id: 5, name: "Andorra", code: "AD" },
    { id: 6, name: "Angola", code: "AO" },
    { id: 7, name: "Anguilla", code: "AI" },
    { id: 8, name: "Antarctica", code: "AQ" },
    { id: 9, name: "Antigua And Barbuda", code: "AG" },
    { id: 10, name: "Argentina", code: "AR" },
  ];

  const [toggleStates, setToggleStates] = useState(
    countries.reduce((acc, country) => ({ ...acc, [country.id]: true }), {})
  );

  const handleToggle = (id) => {
    setToggleStates({ ...toggleStates, [id]: !toggleStates[id] });
  };

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>Country</th>
            <th>Code</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country) => (
            <tr key={country.id}>
              <td>{country.id}</td>
              <td>{country.name}</td>
              <td>{country.code}</td>
              <td>
                <label className={styles.toggleSwitch}>
                  <input
                    type="checkbox"
                    checked={toggleStates[country.id]}
                    onChange={() => handleToggle(country.id)}
                  />
                  <span className={styles.slider}></span>
                </label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.pagination}>
        <button className={styles.pageButton}>&lt;</button>
        <button className={`${styles.pageButton} ${styles.active}`}>1</button>
        <button className={styles.pageButton}>2</button>
        <button className={styles.pageButton}>3</button>
        <span>...</span>
        <button className={styles.pageButton}>25</button>
        <button className={styles.pageButton}>&gt;</button>
      </div>
    </div>
  );
};

export default CountryList;
