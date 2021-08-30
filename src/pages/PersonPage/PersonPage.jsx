import React, { useEffect, useState } from "react"
import PersonEpisodes from "../../components/PersonPage/PersonEpisodes/PersonEpisodes";
import PersonInfo from "../../components/PersonPage/PersonInfo/PersonInfo";
import PersonLinkBack from "../../components/PersonPage/PersonLinkBack/PersonLinkBack";
import PersonPhoto from "../../components/PersonPage/PersonPhoto/PersonPhoto";
import { withErrorApi } from "../../hoc/withErrorApi";
import { API_PERSON } from "../../utils/consts";
import { getApiResource } from "../../utils/network";
import styles from "./PersonPage.module.css"


const PersonPage = ({ setErrorApi, match }) => {
   const [personInfo, setPersonInfo] = useState(null);
   const [personName, setPersonName] = useState(null);
   const [personPhoto, setPersonPhoto] = useState(null);
   const [personEpisodes, setPersonEpisodes] = useState(null);

   useEffect(() => {
      (async () => {
         const id = match.params.id;
         const res = await getApiResource(`${API_PERSON}${id}/`);
         if (res) {
            setPersonInfo([
               { title: 'status', data: res.status },
               { title: 'species', data: res.species },
               { title: 'type', data: res.type },
               { title: 'gender', data: res.gender },
               { title: 'origin', data: res.origin.name },
               { title: 'location', data: res.location.name },
               { title: 'created', data: res.created },
               { title: '​url', data: res.url },
            ]);
            setPersonName(res.name);
            setPersonPhoto(res.image);
            setErrorApi(false);
            res.episode.length && setPersonEpisodes(res.episode);

         } else {
            setErrorApi(true);
         }
      })();
   }, []);
   return (
      <div>
         <div className={styles.wrapper}>
            <PersonLinkBack />
            <div className={styles.container}>
               <PersonPhoto
                  personPhoto={personPhoto}
                  personName={personName}
               />
               {personInfo && <PersonInfo personName={personName} personInfo={personInfo} />}

            </div>
            {personEpisodes && <PersonEpisodes personEpisodes={personEpisodes} />}
         </div>
      </div>
   );

};

export default withErrorApi(PersonPage);