import React from "react"
import { Card, } from "react-bootstrap"
import { Link } from "react-router-dom";
import styles from "./CharactersList.module.css"

const Characterslist = ({ characters }) => {
   return (
      <>

         <ul className={styles.list__container}>
            {characters.map(({ id, image, name, status, gender, species }) =>
               <Card className={styles.card} style={{ width: '12rem' }} key={id}>
                  <Link to={`/person/${id}`}>
                     < Card.Img variant="top" src={image} />
                     <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{status}</Card.Text>
                        <Card.Text>{gender}</Card.Text>
                        <Card.Text>{species}</Card.Text>
                     </Card.Body>
                  </Link>
               </Card>
            )}
         </ul>

      </>
   );

};

export default Characterslist;