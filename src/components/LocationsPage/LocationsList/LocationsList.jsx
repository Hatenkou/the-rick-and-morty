import React from "react"
import { Card, } from "react-bootstrap"
import styles from "./LocationsList.module.css"
import logo from "../../../img/logo.png"
const LocationsList = ({ locations }) => {
   return (
      <>
         <ul className={styles.list__container}>
            {locations.map(({ name, type, dimension, }) =>
               <Card className={styles.card} style={{ width: '12rem' }} key={name}>
                  < Card.Img variant="top" src={logo} />
                  <Card.Body>
                     <Card.Title>{name}</Card.Title>
                     <Card.Subtitle className="mb-2 text-muted">{type}</Card.Subtitle>
                     <Card.Text>{dimension}</Card.Text>
                  </Card.Body>
               </Card>
            )}
         </ul>
      </>
   );

};

export default LocationsList;