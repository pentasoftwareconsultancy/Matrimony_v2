import { useState, useEffect } from "react";
import styles from "./step.module.css";
import Profile from "./Profile";
import Education from "./Education";
import Summary from "./Summary";
import FamilyBackground from "./FamilyBackground";
import HoroscopeForm from "./Horoscope";
import Expectation from "./Expectation";
import ProfileUpload from "./ProfileUpload";
import AddressForm from "./AddressForm";

const Step = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const initialFormData = {
    profile: {
      firstName: "", middleName: "", lastName: "", dob: "", subCast: "", maritalStatus: "", height: "", weight: "", bloodGroup: "", complexion: "", physicalDisabilities: "", diet: "", spectacles: "", lens: "", personality: "",
    },
    education: { degree: "", university: "", year: "" },
    familyBackground: { motherName: "", siblings: "" },
    Expectation: {
      "Preferred Cities": "", "Expected Caste": "", "Expected Height (Feet)": "", "Expected Height (Inches)": "", "Expected Education": "", "Expected Occupation & Income per Annum": "", "Manglik": "", "Max Age Difference": "", "Divorcee": "",
    },
    AddressForm: { documentId: "", residenceAddress: "", email: "", mobile: "", mobile2: "", phone1: "", phone2: "" },
    ProfilePhotos: { profilePicture: "" },
    horoscope: { rashi: "", nakshatra: "", charan: "", gan: "", nadi: "", mangal: "", birthTime: "", birthDistrict: "", devak: "" },
  };

  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("formData");
    return savedData ? JSON.parse(savedData) : initialFormData;
  });

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const steps = [
    { id: 1, component: <Profile formData={formData} setFormData={setFormData} /> },
    { id: 2, component: <FamilyBackground formData={formData} setFormData={setFormData} /> },
    { id: 3, component: <Education formData={formData} setFormData={setFormData} /> },
    { id: 4, component: <Expectation formData={formData} setFormData={setFormData} /> },
    { id: 5, component: <HoroscopeForm formData={formData} setFormData={setFormData} /> },
    { id: 6, component: <ProfileUpload formData={formData} setFormData={setFormData} /> },
    { id: 7, component: <AddressForm formData={formData} setFormData={setFormData} /> },
    { id: 8, component: <Summary formData={formData} /> },
  ];

  const handleStepChange = (direction) => {
    setCurrentStep((prev) => Math.max(1, Math.min(prev + direction, steps.length)));
  };

  return (
    <div className={styles.stepContainer}>
      <div className={styles.stepBar}>
        {steps.map((step) => (
          <div key={step.id} className={`${styles.step} ${currentStep === step.id ? styles.active : ""}`}>
            {step.id}. Step {step.id}
          </div>
        ))}
      </div>
      <div className={styles.stepContent}>{steps[currentStep - 1].component}</div>
      <div className={styles.stepActions}>
        <button onClick={() => handleStepChange(-1)} disabled={currentStep === 1}>Previous</button>
        <button onClick={() => handleStepChange(1)} disabled={currentStep === steps.length}>
          {currentStep === steps.length ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Step;
