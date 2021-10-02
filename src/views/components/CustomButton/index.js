import React from 'react';
import { useAccordionButton } from 'react-bootstrap';

const CustomButton = ({ children, eventKey }) => {

    const decoratedOnClick = useAccordionButton (eventKey)

    return ( 
        <button
            type="button"
            className="btn btn-primary"
            onClick={decoratedOnClick}
        >
            {children}
        </button>

     );
}
 
export default CustomButton;