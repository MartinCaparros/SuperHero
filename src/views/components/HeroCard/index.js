import React from 'react';
import {Card,Button} from 'react-bootstrap';

const HeroCard = ({id,name,image,fullname,alignment}) => {


    return ( 

        <Card className="m-3" style={{ width: '10rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                {fullname}
                </Card.Text>
            </Card.Body>
            <p className="text-center">Alignment: {alignment}</p>
            <Button>¡Recruit this Hero!</Button>
        </Card>

    );
}
 
export default HeroCard;