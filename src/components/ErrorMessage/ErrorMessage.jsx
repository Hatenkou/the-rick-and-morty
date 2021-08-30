import React from "react"
import styles from "./ErrorMessage.module.css"
import errorImg from "../../img/error.webp"
import PersonLinkBack from "../PersonPage/PersonLinkBack/PersonLinkBack";

const ErrorMessage = () => {
   return (
      <>

         <p className={styles.text}>
            <PersonLinkBack />
            <img src={errorImg} alt={'Error'} />
            Sorry "dog" We cannot display data.
            Come back when we fix everything

         </p>
      </>
   );

};

export default ErrorMessage;