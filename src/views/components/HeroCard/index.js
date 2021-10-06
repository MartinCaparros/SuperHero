import React from 'react';
import { ListGroup,Card,Accordion,Button, ListGroupItem } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentTeam } from 'core/team/reducer';


const HeroCard = ({hero}) => {

    const {currentTeam} = useSelector(state=>state.team)

    const dispatch = useDispatch()

    const {
        id,
        name,
        image:{
            url
        },
        powerstats:{
            intelligence,
            strength,
            speed,
            power,
            durability,
            combat
        },
        biography:{
            "full-name": fullName,
            aliases
        },
        appearance:{
            height,
            weight,
            "eye-color": eyeColor,
            "hair-color": hairColor,
        },
        work:{
            base
        }
    } = hero

    const eliminateHero = () => {

        const remainingTeam = currentTeam.filter(hero => hero.id !== id)
        dispatch(setCurrentTeam(remainingTeam))

    }
    return ( 
        <Accordion defaultActiveKey="0">
            <Accordion.Item className="border-0" eventKey="1">
                <Card style={{ width: '10rem' }}>
                    <Accordion.Header>
                        <Card.Img variant="top" src={url} />
                    </Accordion.Header>
                    <Card.Title className="text-center">{name}</Card.Title>
                    <Card.Subtitle className="ms-1"><strong>Powerstats:</strong></Card.Subtitle>
                    <ListGroup>
                        <ListGroupItem><strong>Intelligence:</strong> {intelligence}</ListGroupItem>
                        <ListGroupItem><strong>Strength:</strong> {strength}</ListGroupItem>
                        <ListGroupItem><strong>Speed:</strong> {speed}</ListGroupItem>
                        <ListGroupItem><strong>Durability:</strong> {durability}</ListGroupItem>
                        <ListGroupItem><strong>Power:</strong> {power}</ListGroupItem>
                        <ListGroupItem><strong>Combat:</strong> {combat}</ListGroupItem>
                    </ListGroup>
                    <Accordion.Body className="p-0">
                        <Card.Body className="p-0">
                            <ListGroup>
                                <ListGroup.Item><strong>Weight:</strong> {weight[1]}</ListGroup.Item>
                                <ListGroup.Item><strong>Height:</strong> {height[1]}</ListGroup.Item>
                                <ListGroup.Item><strong>Full Name:</strong> {fullName}</ListGroup.Item>
                                <ListGroup.Item><strong>Alias:</strong> {aliases[0]}</ListGroup.Item>
                                <ListGroup.Item><strong>Eye Color:</strong> {eyeColor}</ListGroup.Item>
                                <ListGroup.Item><strong>Hair Color:</strong> {hairColor}</ListGroup.Item>
                                <ListGroup.Item><strong>Work place:</strong> {base}</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Accordion.Body>
                </Card>
                <Button className="mt-1 btn-danger" onClick={()=>eliminateHero()} >Eliminate this hero</Button>
            </Accordion.Item>
        </Accordion>

     );

}
 
export default HeroCard;