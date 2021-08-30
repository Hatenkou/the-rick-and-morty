import React from "react"
import { Card, Button } from "react-bootstrap"
import styles from "./EpisodesList.module.css"



const EpisodesList = ({ episodes }) => {

   return (
      <>
         <ul className={styles.list__container}>
            {episodes.map(({ name, air_date, episode, characters, created, url }) =>
               <Card className={styles.card} style={{ width: '12rem' }} key={name}>
                  <Card.Body>
                     <Card.Title>Name: {name}</Card.Title>
                     <Card.Subtitle className="mb-2 text-muted">Data: {air_date}</Card.Subtitle>
                     <Card.Text>Episode: {episode}</Card.Text>
                     <Card.Text>created: {created}</Card.Text>
                     <Card.Text >url: {url}</Card.Text>

                  </Card.Body>
               </Card>
            )}
         </ul>
      </>
   );

};

export default EpisodesList;