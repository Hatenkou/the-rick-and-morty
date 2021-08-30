//import { CHARACTERS_PAGE, HTTPS, RICK_AND_MORTY_API } from "./consts";


export const getApiResource = async (url) => {
   try {
      const res = await fetch(url);
      if (!res.ok) {
         console.error('Could not fetsh', res.status);
         return false;
      }
      return await res.json();
   } catch (error) {
      console.error('not fetsh', error.message);
      return false;
   }


}

{/*(async () => {
   const body = await getApiResource(HTTPS + RICK_AND_MORTY_API + CHARACTERS_PAGE);
   console.log(body);
})();

getApiResource(HTTPS + RICK_AND_MORTY_API + CHARACTERS_PAGE)
  .then(body => console.log(body))

*/}
export const makeConcurrentRequest = async (url) => {
   const response = await Promise.all(url.map(res => {
      return fetch(res).then(res => res.json())
   }));
   return response;
}