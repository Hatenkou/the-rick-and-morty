import React from "react"
import { useLocation } from "react-router-dom";
import styles from "./NotFoundPage.module.css"
import NotFound from "../../img/not-found.png"
import PersonLinkBack from "../../components/PersonPage/PersonLinkBack/PersonLinkBack";

const NotFoundPage = () => {
   let location = useLocation();

   return (
      <div className={styles.wrapper}>
         <img src={NotFound} alt={'Not Found'} />
         <h3 className={styles.text}>No math for{location.pathname}</h3>
         <PersonLinkBack />
      </div>
   );

};

export default NotFoundPage;