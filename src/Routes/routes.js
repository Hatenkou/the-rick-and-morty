
import CharactersPage from "../pages/CharactersPage/CharactersPage";
import EpisodesPage from "../pages/EpisodesPage/EpisodesPage";
import LocationsPage from "../pages/LocationsPage/LocationsPage";
import MyWatchListPage from "../pages/MyWatchListPage/MyWatchListPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import PersonPage from "../pages/PersonPage/PersonPage";
import { CHARACTERS_ROUT, EPISODES_ROUT, LOCATIONS_ROUT, MY_WATCH_LIST_ROUT, PERSON_ROUT } from "../utils/consts";


export const pablicRoutes = [

   {
      path: CHARACTERS_ROUT,
      exact: true,
      Component: CharactersPage,
   },
   {
      path: EPISODES_ROUT,
      exact: true,
      Component: EpisodesPage
   },
   {
      path: LOCATIONS_ROUT,
      exact: true,
      Component: LocationsPage
   },
   {
      path: MY_WATCH_LIST_ROUT,
      exact: true,
      Component: MyWatchListPage
   },
   {
      path: PERSON_ROUT,
      exact: true,
      Component: PersonPage
   },
   {
      path: "*",
      exact: false,
      Component: NotFoundPage
   },


]