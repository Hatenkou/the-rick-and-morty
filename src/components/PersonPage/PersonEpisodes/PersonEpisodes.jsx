import React, { useEffect, useState } from "react"
import { Accordion, } from "react-bootstrap"
import { makeConcurrentRequest } from "../../../utils/network";
import styles from "./PersonEpisodes.module.css"

const PersonEpisodes = ({ personEpisodes }) => {
   const [episodesName, SetEpisodesName] = useState([]);
   useEffect(() => {
      (async () => {
         const response = await makeConcurrentRequest(personEpisodes);

         SetEpisodesName(response);
         console.log(episodesName);
      })();
   }, []);

   return (
      <div >
         <Accordion defaultActiveKey="0" >
            <Accordion.Item eventKey="1">
               <Accordion.Header >
                  <h2 className={styles.header__item}>Episodes</h2>
               </Accordion.Header>
               <Accordion.Body >
                  {episodesName.map(({ name, id, episode, air_date }) =>
                     <li className={styles.list__item} key={id}>
                        <span className={styles.item__episode}>Episode {name}</span>
                        <span className={styles.item__colon}> : </span>
                        <span className={styles.item__name}>"{episode}"</span>
                        <span className={styles.item__colon}> : </span>
                        <span className={styles.item__data}> {air_date}</span>
                     </li>
                  )
                  }
               </Accordion.Body>
            </Accordion.Item>
         </Accordion>
      </div>
   );

};

export default PersonEpisodes;
