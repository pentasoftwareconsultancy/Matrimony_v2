import { useState } from "react";
import styles from "../styles/Sidebar.module.css";

const Sidebar = () => {
  const [isAccordionOpen, setAccordionOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isDropdownOpens, setDropdownOpens] = useState(false);
  const [isReligions, setReligions] = useState(false);
  const [islanguage, setlanguage] = useState(false);
  const [isdetails, setdetails] = useState(false);
  const [iscountry, setcountry] = useState(false);

  const toggleAccordion = () => setAccordionOpen(!isAccordionOpen);
  const toggleDropdownOpen = () => setDropdownOpen(!isDropdownOpen);
  const toggleDropdownOpens = () => setDropdownOpens(!isDropdownOpens);
  const toggleReligions = () => setReligions(!isReligions);
  const togglelanguage = () => setlanguage(!islanguage);
  const toggledetails = () => setdetails(!isdetails);
  const togglecountry = () => setcountry(!iscountry);

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <h2 className={styles.logo}>Dashboard</h2>
        <a href="/dashboard" className={styles.button}>
         
        <i className="fa-solid fa-gauge"></i>Wallet
        </a>

        <button
          className={`${styles.button} ${styles.block} ${
            isAccordionOpen ? styles.green : ""
          }`}
          onClick={toggleAccordion}
        >  <i className="fa-solid fa-children"></i>
        <a href="/membars"> Membars <i className="fa fa-caret-down"></i></a>
        </button>
        <div
          className={`${styles.card} ${isAccordionOpen ? styles.show : styles.hide}`}
        >
          <a href="/upload" className={styles.button}>
            Bulk Membars
          </a>
          <a href="#" className={styles.button}>
            Deleted Membars
          </a>
          <a href="#" className={styles.button}>
            Reported Membars
          </a>
        </div>

        <button
          className={`${styles.button} ${styles.block} ${
            isDropdownOpen ? styles.green : ""
          }`}
          onClick={toggleDropdownOpen}
        >
         <i className="fa-regular fa-user"></i> Profile <i className="fa fa-caret-down"></i>
        </button>
        <div
          className={`${styles.card} ${isDropdownOpen ? styles.show : styles.hide}`}
        >
          <a href="/unapproved" className={styles.button}>
            Unapproved Profile
          </a>
          <a href="/onbehalves" className={styles.button}>
          On Behalf 
          </a>
          <button
            className={`${styles.button} ${styles.block} ${
              isDropdownOpens ? styles.green : ""
            }`}
            onClick={toggleDropdownOpens}
          >
            Profile Atributes <i className="fa fa-caret-down"></i>
          </button>
          <div
            className={`${styles.card} ${isDropdownOpens ? styles.show : styles.hide}`}
          >
            <button
              className={`${styles.button} ${styles.block} ${
                isReligions ? styles.green : ""
              }`}
              onClick={toggleReligions}
            >
             <a href="/religion"> Religions <i className="fa fa-caret-down"></i>
</a>            </button>
            <div
              className={`${styles.card} ${isReligions ? styles.show : styles.hide}`}
            >
              <a href="/caste" className={styles.button}>
                Caste
              </a>
              <a href="/subcaste" className={styles.button}>
                Sub-caste
              </a>
            </div>

            <button
              className={`${styles.button} ${styles.block} ${
                iscountry ? styles.green : ""
              }`}
              onClick={togglecountry}
            >  <a href="county" className={styles.button} >
           Country</a> <i className="fa fa-caret-down"></i>
            </button>
            <div
              className={`${styles.card} ${iscountry ? styles.show : styles.hide}`}
            >
              <a href="/start" className={styles.button}>
                Status
              </a>
              <a href="/cities" className={styles.button}>


              
                City
              </a>
            </div>

            <button
              className={`${styles.button} ${styles.block} ${
                islanguage ? styles.green : ""
              }`}
              onClick={togglelanguage}
            >
              Language <i className="fa fa-caret-down"></i>
            </button>
            <div
              className={`${styles.card} ${islanguage ? styles.show : styles.hide}`}
            >
              <a href="#" className={styles.button}>
                English
              </a>
              <a href="#" className={styles.button}>
                Marathi
              </a>
            </div>

            <button
              className={`${styles.button} ${styles.block} ${
                isdetails ? styles.green : ""
              }`}
              onClick={toggledetails}
            >
              Details <i className="fa fa-caret-down"></i>
            </button>
            <div
              className={`${styles.card} ${isdetails ? styles.show : styles.hide}`}
            >
              <a href="/family" className={styles.button}>
                Family values
              </a>
              <a href="#" className={styles.button}>
                Family status
              </a>
              <a href="/marital" className={styles.button}>
                Marital status
              </a>
            </div>
          </div>
        </div>

        <a href="/testimonal" className={styles.button}>
        <i className="fa-solid fa-bell"></i>
          Testimonial
        </a>
        <a href="/blog" className={styles.button}>
        <i className="fa-solid fa-blog"></i> Blogs
        </a>
        <a href="#" className={styles.button}>
        <i className="fa-solid fa-newspaper"></i>    News
        </a>
        <a href="/birde" className={styles.button}>
        <i className="fa-solid fa-child-dress"></i>
          Bride
        </a>
        <a href="/groom" className={styles.button}>
        <i className="fa-solid fa-child"></i>  Groom
        </a>
        <a href="#" className={styles.button}>
        <i className="fa-solid fa-gears"></i> Settings
        </a>
        <button className={styles.logout}>Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;
