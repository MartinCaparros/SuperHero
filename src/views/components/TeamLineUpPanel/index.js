import React from 'react';
import {CustomButton,CreationPanel} from 'views/components';
import { Accordion } from 'react-bootstrap';


const TeamLineUpPanel = () => {


    return ( 
        <div className="d-flex flex-column align-items-center">
            <h1 className="mt-3">Build your own Super Hero Team</h1>
            <Accordion
                defaultActiveKey="0"
            >
                <div className="d-flex justify-content-center mt-5">
                    <CustomButton
                        eventKey="0"

                    >Create a new Team
                    </CustomButton> 
                </div>
                <div className="d-flex">
                    <Accordion.Collapse
                        eventKey="0"
                    >
                    <CreationPanel></CreationPanel>
                    </Accordion.Collapse>
                </div>
            </Accordion>
       </div>

    );
}
 
export default TeamLineUpPanel;