import React from "react"
import { useHistory } from "react-router-dom"
import UiButton from "../../UI/UiButton";



const PersonLinkBack = () => {

   const history = useHistory();

   const handelGoBack = () => {
      history.goBack();
   };
   return (
      <UiButton text={'Go back'} onClick={handelGoBack} />
   );

};

export default PersonLinkBack;