
import styles from "../styles/Popup.module.css";

const Popup = ({ newMember, setNewMember, onSave, onClose }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h3>Add New Member</h3>
        <label>
          Name:
          <input
            type="text"
            value={newMember.name}
            onChange={(e) =>
              setNewMember({ ...newMember, name: e.target.value })
            }
          />
        </label>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={newMember.email}
          onChange={(e) =>
            setNewMember({ ...newMember,email:e.target.email})
          }
          required
        />
        <label>Photo (800x800)</label>
        <input
          type="file"
          name="photo"
          accept="image/*"
          value={newMember.file}
          onChange={(e) =>
            setNewMember({ ...newMember,file: e.target.value})
          }
        />
         <label>Password *</label>
        <input
          type="password"
          name="password"
          value={newMember.password}
          onChange={(e)=>
            setNewMember({ ...newMember,password: e.target.password})
          }
          />
          <label>Confirm Password *</label>
        <input
          type="password"
          name="confirmPassword"
          value={newMember.confirmPassword}
          onChange={(e)=>
           setNewMember({ ...newMember,confirmPassword:e.target.confirmPassword})
          }
          
        />
            <label>On Behalf *</label>
        <select
          name="onBehalf"
          value={newMember.onBehalf}
          onChange={(e)=>
            setNewMember({ ...newMember,onBehalf:e.target.onBehalf})
          }
          
        >
          <option value="">Select</option>
          <option value="Myself">Myself</option>
          <option value="Other">Other</option>
        </select>
          
        <label>
          Gender:
          <select
            value={newMember.gender}
            onChange={(e) =>
              setNewMember({ ...newMember, gender: e.target.value })
            }
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </label>
        <label>
          Member Code:
          <input
            type="text"
            value={newMember.code}
            onChange={(e) =>
              setNewMember({ ...newMember, code: e.target.value })
            }
          />
        </label>
        <div className={styles.modalActions}>
          <button onClick={onClose} className={styles.cancelButton}>
            Cancel
          </button>
          <button onClick={onSave} className={styles.saveButton}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
