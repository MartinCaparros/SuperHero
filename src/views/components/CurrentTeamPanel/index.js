import React from 'react' ;
import { Col,Row,Accordion, ListGroup} from 'react-bootstrap';
import { setCurrentTeam } from 'core/team/reducer';
import { Card } from 'react-bootstrap';
import { useSelector,useDispatch } from 'react-redux';
import AccordionItem from 'react-bootstrap/esm/AccordionItem';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';

const CurrentTeamPanel = () => {
    
    const {currentTeam} = useSelector(state => state.team)
    const dispatch = useDispatch()

    return ( 
        <main>
            <Row>
            {currentTeam.map( hero =>{
                const {
                    name,
                    image:{
                        url
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
                return(
                <Col
                    sm
                    key={hero.id}
                >
                    <Accordion defaultActiveKey="0">
                        <AccordionItem eventKey="0">
                            <Card style={{ width: '10rem' }}>
                                <Accordion.Header>
                                    <Card.Img variant="top" src={url} />
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Card.Body>
                                        <Card.Text>
                                            <ListGroup>
                                                <ListGroup.Item>Weight:{weight[1]}</ListGroup.Item>
                                                <ListGroup.Item>Height:{height[1]}</ListGroup.Item>
                                                <ListGroup.Item>Full Name:{fullName}</ListGroup.Item>
                                                <ListGroup.Item>Alias:{aliases[0]}</ListGroup.Item>
                                                <ListGroup.Item>Eye Color:{eyeColor}</ListGroup.Item>
                                                <ListGroup.Item>Hair Color:{hairColor}</ListGroup.Item>
                                                <ListGroup.Item>Work place:{base}</ListGroup.Item>
                                            </ListGroup>
                                        </Card.Text>
                                    </Card.Body>
                                </Accordion.Body>
                            </Card>
                        </AccordionItem>
                    </Accordion>
                </Col>)
                }            
            )}
            </Row>
        </main>

    );
}
 
export default CurrentTeamPanel;