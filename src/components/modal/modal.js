
import React from "react";
import styles from "../../components/modal/modal.module.css";
import { RiCloseLine } from "react-icons/ri";
import SubscribeUs from "sections/subscribe-us";
const Modal = ({ setIsOpen }) => {
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Contact Us</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={styles.modalContent}>
            <SubscribeUs heading="Contact Us?"/>
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
            
              <button
                className={styles.cancelBtn}
                onClick={() => setIsOpen(false)}
              >
                close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;