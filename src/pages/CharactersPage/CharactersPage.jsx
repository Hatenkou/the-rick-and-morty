import React, { useEffect, useState } from "react"
import Characterslist from "../../components/CharactersPage/CharactersList/CharactersList";
import NavigationPage from "../../components/Navigation/NavigationPage";
import { withErrorApi } from "../../hoc/withErrorApi";
import { useQueryParams } from "../../hooks/useQueryParams";
import { getPageId } from "../../services/getData";
import { API_CHARACTERS } from "../../utils/consts";
import { getApiResource } from "../../utils/network";

const CharactersPage = ({ setErrorApi }) => {

   const [characters, setCharacters] = useState(null);
   const [prevPage, setPrevPage] = useState(null);
   const [nextPage, setNextPage] = useState(null);
   const [counterPage, SetCounterPage] = useState(1);

   const query = useQueryParams();
   const queryPage = query.get('page');

   const getResource = async (url) => {
      const res = await getApiResource(url);

      if (res) {
         const charactersList = res.results.map((element) => {
            return {
               id: element.id,
               name: element.name,
               status: element.status,
               species: element.species,
               type: element.type,
               gender: element.gender,
               origin: {
                  name: element.origin.name,
                  url: element.origin.url
               },
               image: element.image
            }
         })

         setCharacters(charactersList);
         setPrevPage(res.info.prev);
         setNextPage(res.info.next);
         SetCounterPage(getPageId(url));
         setErrorApi(false);
      } else {
         setErrorApi(true);

      }


   }
   useEffect(() => {
      getResource(API_CHARACTERS + queryPage);
   }, []);


   return (
      <>
         <NavigationPage
            getResource={getResource}
            prevPage={prevPage}
            nextPage={nextPage}
            counterPage={counterPage}
         />
         {characters && <Characterslist characters={characters} />}
         <NavigationPage
            getResource={getResource}
            prevPage={prevPage}
            nextPage={nextPage}
            counterPage={counterPage}
         />

      </>
   );

};

export default withErrorApi(CharactersPage);

