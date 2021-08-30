export const ADD_EPISODE_TO_WATHCH_LIST = 'ADD_EPISODE_TO_WATHCH_LIST';
export const REMOVE_EPISODE_FROM_WATHCH_LIST = 'REMOVE_EPISODE_FROM_WATHCH_LIST';



export const setEpisodeToWatchList = episode => ({
   type: ADD_EPISODE_TO_WATHCH_LIST,
   payload: '',
})

export const removeEpisodeFromWatchList = () => ({
   type: REMOVE_EPISODE_FROM_WATHCH_LIST,
   payload: '',
})