import React from "react"
import styles from "./PersonInfo.module.css"


const PersonInfo = ({ personName, personInfo }) => {
   return (

      <div className={styles.wrapper}>
         <h2>{personName}</h2>
         <ul className={styles.list__container}>
            {personInfo.map(({ title, data }) =>
               data && (
                  <li className={styles.list__item} key={title}>
                     <span className={styles.item__title}>
                        {title}:
                     </span>
                     <span className={styles.item}>
                        {data}
                     </span>
                  </li>
               )
            )}
         </ul>
      </div>
   );

};

export default PersonInfo;