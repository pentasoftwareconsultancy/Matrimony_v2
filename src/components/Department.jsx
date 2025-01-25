import { useState, useEffect } from "react";
import styles from "../styles/department.module.css";

function Department() {
  const departments = [
    {
      image: "https://live.themewild.com/eduka/assets/img/icon/monitor.svg",
      title: "Business And Finance",
      description: "There are many variations of passages the majority have some injected humour.",
    },
    {
      image: "https://live.themewild.com/eduka/assets/img/icon/law.svg",
      title: "Law And Criminology",
      description: "There are many variations of passages the majority have some injected humour.",
    },
    {
      image: "https://live.themewild.com/eduka/assets/img/icon/data.svg",
      title: "IT And Data Science",
      description: "There are many variations of passages the majority have some injected humour.",
    },
    {
      image: "https://live.themewild.com/eduka/assets/img/icon/health.svg",
      title: "Health And Medicine",
      description: "There are many variations of passages the majority have some injected humour.",
    },
    {
        image: "https://live.themewild.com/eduka/assets/img/icon/monitor.svg",
        title: "Business And Finance",
        description: "There are many variations of passages the majority have some injected humour.",
      },
    {
      image: "https://live.themewild.com/eduka/assets/img/icon/art.svg",
      title: "Art & Design",
      description: "There are many variations of passages the majority have some injected humour.",
    },
    {
      image: "https://live.themewild.com/eduka/assets/img/icon/art.svg",
      title: "Art & Design",
      description: "There are many variations of passages the majority have some injected humour.",
    },{
      image: "https://live.themewild.com/eduka/assets/img/icon/art.svg",
      title: "Art & Design",
      description: "There are many variations of passages the majority have some injected humour.",
    },{
      image: "https://live.themewild.com/eduka/assets/img/icon/art.svg",
      title: "Art & Design",
      description: "There are many variations of passages the majority have some injected humour.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(slideInterval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(departments.length / 3));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.ceil(departments.length / 3) - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.header}>
          <span className={styles.subtitle}>DEPARTMENT</span>
          <br />
          Testimonial<span className={styles.highlight}>Department</span>
        </h2>
        <div className={styles.slider}>
          <div
            className={styles.slides}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {departments.map((dept, index) => (
              <div key={index} className={styles.card}>
                <img src={dept.image} alt={dept.title} className={styles.image} />
                <h3 className={styles.title}>{dept.title}</h3>
                <p className={styles.description}>{dept.description}</p>
                <a href="#" className={styles.readMore}>
                  READ MORE →
                </a>
              </div>
            ))}
          </div>
        </div>
        <button className={`${styles.navButton} ${styles.left}`} onClick={handlePrev}>
          ‹
        </button>
        <button className={`${styles.navButton} ${styles.right}`} onClick={handleNext}>
          ›
        </button>
      </div>
    </>
  );
}

export default Department;
