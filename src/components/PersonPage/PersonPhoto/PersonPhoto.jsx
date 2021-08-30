import React from "react"
import styles from "./PersonPhoto.module.css"

const PersonPhoto = ({ personName, personPhoto }) => {
   return (
      <div className={styles.container}>
         <img className={styles.photo}
            src={personPhoto}
            alt={personName} />

      </div>
   );

};

export default PersonPhoto;
