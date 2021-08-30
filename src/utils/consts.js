//ROUT
export const PARAM_PAGE_ROUT = "?page=1";
export const CHARACTERS_ROUT = "/characters/";
export const EPISODES_ROUT = "/episodes/";
export const LOCATIONS_ROUT = "/locations/";
export const MY_WATCH_LIST_ROUT = "/my_watch_list/";
export const PERSON_ROUT = "/person/:id"
export const LOCATIONS_ROUT_PAGE = LOCATIONS_ROUT + PARAM_PAGE_ROUT;
export const EPISODES_ROUT_PAGE = EPISODES_ROUT + PARAM_PAGE_ROUT;
export const CHARACTERS_ROUT_PAGE = CHARACTERS_ROUT + PARAM_PAGE_ROUT;

//API
export const PARAM_PAGE = "?page=";
export const HTTPS = "https://";
export const RICK_AND_MORTY_API = "rickandmortyapi.com/api/";
export const CHARACTERS_PAGE = "character/";
export const LOCATIONS_PAGE = "location/";
export const EPISODES_PAGE = "episode/";
export const PERSON_PAGE = "character/";
export const API_CHARACTERS = HTTPS + RICK_AND_MORTY_API + CHARACTERS_PAGE + PARAM_PAGE;
export const API_EPISODES = HTTPS + RICK_AND_MORTY_API + EPISODES_PAGE + PARAM_PAGE;
export const API_LOCATIONS = HTTPS + RICK_AND_MORTY_API + LOCATIONS_PAGE + PARAM_PAGE;
export const API_PERSON = HTTPS + RICK_AND_MORTY_API + PERSON_PAGE;