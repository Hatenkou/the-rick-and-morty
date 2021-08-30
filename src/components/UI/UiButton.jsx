import React from "react"
import { Button } from "react-bootstrap"
const UiButton = ({ text, onClick, disabled }) => {
   return (
      <>
         <Button variant="success"
            disabled={disabled}
            onClick={onClick}
         >
            {text}
         </Button>{' '}

      </>
   );

};

export default UiButton;
