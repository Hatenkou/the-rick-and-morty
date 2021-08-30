import { PARAM_PAGE } from "../utils/consts";

export const getPageId = url => {
   const pos = url.lastIndexOf(PARAM_PAGE)
   const id = url.slice(pos + PARAM_PAGE.length,);

   return Number(id);
}