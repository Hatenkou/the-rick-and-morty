import { ADD_EPISODE_TO_WATHCH_LIST, REMOVE_EPISODE_FROM_WATHCH_LIST } from "../actions";



const watchListReduser = (state, action) => {
   switch (action.type) {
      case ADD_EPISODE_TO_WATHCH_LIST:
         return {
            ...state,
            ...action.payload
         }
      case REMOVE_EPISODE_FROM_WATHCH_LIST:
         return {
            ...state,
            ...action.payload
         }
      default:
         return state;
   }
}
export default watchListReduser;