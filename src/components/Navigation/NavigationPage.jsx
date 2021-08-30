import React from "react"
import { Link } from "react-router-dom";
import UiButton from "../UI/UiButton";
import styles from "./NavigationPage.module.css"


const NavigationPage = ({ getResource, prevPage, nextPage, counterPage }) => {

   const hendleChangNext = () => getResource(nextPage);
   const hendleChangPrev = () => getResource(prevPage);

   return (

      <div className={styles.button__container}>
         <Link to={`?page=${counterPage - 1}`}
            className={styles.links}>
            <UiButton text='Prev'
               onClick={hendleChangPrev}
               disabled={!prevPage}
            />
         </Link>
         <Link to={`?page=${counterPage + 1}`}
            className={styles.links}>
            <UiButton text='Next'
               disabled={!nextPage}
               onClick={hendleChangNext}
            />
         </Link>
      </div>
   );

};

export default NavigationPage;