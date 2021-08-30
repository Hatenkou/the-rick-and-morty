import React, { useEffect, useState } from "react"
import EpisodesList from "../../components/EpisodesPage/EpisodesList/EpisodesList";
import NavigationPage from "../../components/Navigation/NavigationPage";
import { withErrorApi } from "../../hoc/withErrorApi";
import { useQueryParams } from "../../hooks/useQueryParams";
import { getPageId } from "../../services/getData";
import { API_EPISODES } from "../../utils/consts";
import { getApiResource } from "../../utils/network";

const EpisodesPage = ({ setErrorApi }) => {
   const [episodes, setEpisodes] = useState(null);
   const [prevPage, setPrevPage] = useState(null);
   const [nextPage, setNextPage] = useState(null);
   const [counterPage, SetCounterPage] = useState(1);

   const query = useQueryParams();
   const queryPage = query.get('page');


   const getEpisodes = async (url) => {
      const res = await getApiResource(url);

      if (res) {
         const episodesList = res.results.map((element) => {
            return {
               id: element.id,
               name: element.name,
               air_date: element.air_date,
               episode: element.episode,
               characters: element.characters,
               url: element.url,
               created: element.created
            }
         })

         setEpisodes(episodesList);
         setPrevPage(res.info.prev);
         setNextPage(res.info.next);
         SetCounterPage(getPageId(url));
         setErrorApi(false);
      } else {
         setErrorApi(true);
      }


   }
   useEffect(() => {
      getEpisodes(API_EPISODES + queryPage);
   }, []);

   return (
      <>

         <NavigationPage
            getResource={getEpisodes}
            prevPage={prevPage}
            nextPage={nextPage}
            counterPage={counterPage}
         />
         {episodes && <EpisodesList episodes={episodes} />}
      </>
   );

};

export default withErrorApi(EpisodesPage);