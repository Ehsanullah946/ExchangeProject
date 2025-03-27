import React, { useState } from "react";
import styles from './Modal.module.css'
import { useContexts } from "../../contexs/AppContexts";
import Button from "../Button";

export default function Modal() {
    const {isOpen,setIsOpen}=useContexts();

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  if(isOpen) {
    document.body.classList.add('activeModal')
  } else {
    document.body.classList.remove('activeModal')
  }

  return (
    <>
        <div className={styles.modal}>
          <div onClick={toggleModal} className={styles.overlay}></div>
          <div className={styles.modalContent}>
          <span onClick={toggleModal}>❎</span>
          <form action="">
            <div className={styles.formContain}>
              <div className={styles.labelPart}>
                <label>ID:</label>  
                <label>Name:</label>
                <label>ID Card:</label>
                <label>Phone Number:</label>
              </div>
                <div className={styles.inputPart}>
                <input type="text" name="id" />
                <select name="name">
                    <option value="">select</option>
                </select>
                <input type="text"  name="idCardNumber"/>
                <input type="text" name="phoneNumber"/>
              </div>
            </div>
            <div className={styles.btn}>
            <Button tip="primary">Search</Button>
            <Button tip="primary">Cancle</Button>
            </div> 
            </form>
           
          </div>
        </div>
    </>
  )

}
