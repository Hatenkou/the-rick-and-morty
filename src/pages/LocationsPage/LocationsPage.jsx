import React, { useEffect, useState } from "react"
import LocationsList from "../../components/LocationsPage/LocationsList/LocationsList";
import NavigationPage from "../../components/Navigation/NavigationPage";
import { withErrorApi } from "../../hoc/withErrorApi";
import { useQueryParams } from "../../hooks/useQueryParams";
import { getPageId } from "../../services/getData";
import { API_LOCATIONS } from "../../utils/consts";
import { getApiResource } from "../../utils/network";

const LocationsPage = ({ setErrorApi }) => {

   const [locations, setLocations] = useState(null);
   const [prevPage, setPrevPage] = useState(null);
   const [nextPage, setNextPage] = useState(null);
   const [counterPage, SetCounterPage] = useState(1);

   const query = useQueryParams();
   const queryPage = query.get('page');



   const getLocations = async (url) => {
      const res = await getApiResource(url);
      if (res) {
         const locationList = res.results.map((element) => {
            return {
               id: element.id,
               name: element.name,
               type: element.type,
               dimension: element.dimension,
               residents: element.residents[element],
               url: element.url,
               created: element.created
            }
         })

         setLocations(locationList);
         setErrorApi(false);
         setPrevPage(res.info.prev);
         setNextPage(res.info.next);
         SetCounterPage(getPageId(url));
      } else {
         setErrorApi(true);
      }


   }
   useEffect(() => {
      getLocations(API_LOCATIONS + queryPage);
   }, []);


   return (
      <>
         <NavigationPage
            getResource={getLocations}
            prevPage={prevPage}
            nextPage={nextPage}
            counterPage={counterPage}
         />
         {locations && <LocationsList locations={locations} />}
      </>
   );

};

export default withErrorApi(LocationsPage);