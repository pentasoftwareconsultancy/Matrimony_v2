import  { useState } from "react";
import styles from "../styles/RegistrationForm.module.css";

const RegistrationForm = () => {
    const steps = ["1", "2", "3", "4"];
    const [currentStep, setCurrentStep] = useState(0);
  
    const nextStep = () => {
      if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
    };
  
    const prevStep = () => {
      if (currentStep > 0) setCurrentStep(currentStep - 1);
    };
  
    return (
      <div className={styles.container}>
        {/* Stepper Bar */}
        <div className={styles.stepper}>
          {steps.map((step, index) => (
            <div
              key={index}
              className={`${styles.step} ${
                index <= currentStep ? styles.active : ""
              }`}
            >
              <div className={styles.circle}>{step}</div>
              {index < steps.length - 1 && (
                <div
                  className={`${styles.connector} ${
                    index < currentStep ? styles.filled : ""
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>
  
        {/* Form Content */}
        {currentStep === 0 && (
          <div className={styles.form}>
            <h2 className={styles.title}>REGISTRATION</h2>
            <p className={styles.subtitle}>
              You are just four steps away from contacting 1000s of profiles!!
            </p>
            <div className={styles.inputRow}>
              <input
                type="text"
                placeholder="Full Name*"
                className={styles.input}
                
              />
              <input
                type="email"
                placeholder="Email Address*"
                className={styles.input}
              />
            </div>
            <div className={styles.inputRow}>
              <input
                type="text"
                placeholder="Phone Number*"
                className={styles.input}
              />
              <input
                type="password"
                placeholder="Password*"
                className={styles.input}
              />
            </div>
            <div className={styles.inputRow}>
              <select className={styles.input}>
                <option value="">Gender*</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <input type="date" className={styles.input} />
            </div>
            <button className={styles.nextButton} onClick={nextStep}>
              Next
            </button>
          </div>
        )}
  
        {currentStep === 1 && (
          <div className={styles.form}>
            <h2 className={styles.title}>CREATE PROFILE</h2>
            <p className={styles.subtitle}>
              Your account has been created! Just complete your profile to
              contact and message 1000s of profiles!
            </p>
            <div className={styles.inputRow}>
              <select className={styles.input}>
                <option value="">Marital Status*</option>
              </select>
              <select className={styles.input}>
                <option value="">No. of Children</option>
              </select>
            </div>
            <div className={styles.inputRow}>
              <select className={styles.input}>
                <option value="">Height*</option>
              </select>
              <input
                type="text"
                placeholder="Weight (in kg)"
                className={styles.input}
              />
            </div>
            <div className={styles.inputRow}>
              <select className={styles.input}>
                <option value="">Body Type*</option>
              </select>
              <select className={styles.input}>
                <option value="">Blood Group*</option>
              </select>
            </div>
            <div className={styles.inputRow}>
              <select className={styles.input}>
                <option value="">Smoke</option>
              </select>
              <select className={styles.input}>
                <option value="">Drink</option>
              </select>
            </div>
            <button className={styles.prevButton} onClick={prevStep}>
              Previous
            </button>
            <button className={styles.nextButton} onClick={nextStep}>
              Next
            </button>
          </div>
        )}
         {currentStep === 2 && (
          <div className={styles.form}>
            <h2 className={styles.title}>REGISTRATION</h2>
            <p className={styles.subtitle}>
              You are just four steps away from contacting 1000s of profiles!!
            </p>
            <div className={styles.inputRow}>
              <input
                type="text"
                placeholder="Full Name*"
                className={styles.input}
              />
              <input
                type="email"
                placeholder="Email Address*"
                className={styles.input}
              />
            </div>
            <div className={styles.inputRow}>
              <input
                type="text"
                placeholder="Phone Number*"
                className={styles.input}
              />
              <input
                type="password"
                placeholder="Password*"
                className={styles.input}
              />
            </div>
            <div className={styles.inputRow}>
              <select className={styles.input}>
                <option value="">Gender*</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <input type="date" className={styles.input} />
            </div>
            <button className={styles.prevButton} onClick={prevStep}>
              Previous
            </button>
            <button className={styles.nextButton} onClick={nextStep}>
              Next
            </button>
          </div>
        )}
         {currentStep === 3 && (
          <div className={styles.form}>
            <h2 className={styles.title}>REGISTRATION</h2>
            <p className={styles.subtitle}>
              You are just four steps away from contacting 1000s of profiles!!
            </p>
            <div className={styles.inputRow}>
              <input
                type="text"
                placeholder="Full Name*"
                className={styles.input}
              />
              <input
                type="email"
                placeholder="Email Address*"
                className={styles.input}
              />
            </div>
            <div className={styles.inputRow}>
              <input
                type="text"
                placeholder="Phone Number*"
                className={styles.input}
              />
              <input
                type="password"
                placeholder="Password*"
                className={styles.input}
              />
            </div>
            <div className={styles.inputRow}>
              <select className={styles.input}>
                <option value="">Gender*</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <input type="date" className={styles.input} />
            </div>  <button className={styles.prevButton} onClick={prevStep}>
              Previous
            </button>
            <button className={styles.nextButton} onClick={nextStep}>
              Next
            </button>
          </div>
        )}
      </div>
    );
  };
  
  export default RegistrationForm;

