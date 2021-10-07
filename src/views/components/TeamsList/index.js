import React from 'react';
import { useSelector } from 'react-redux';
import {Col,Row} from 'react-bootstrap';
import { HeroCard } from 'views/components';
    
const TeamList = () => {

    const {teams} = useSelector(state=>state.team)

    const hideDeleteButton = true
    
    return ( 
    
        <section>
            <div className="text-center"> 
                <h2>This are your teams</h2>   
            </div>
            <Row className="m-0">
                {teams.map( team => {
                    return(
                        <>
                            <Col xs={12}>
                                <h3 className="text-center m-3">Team: {team.name}</h3>
                            </Col>
                            {team.team.map(hero=> 
                                <Col
                                    sm={4}
                                    lg={2}
                                    key={hero.id}
                                >
                                    <HeroCard
                                        hero={hero}
                                        hideDeleteButton={hideDeleteButton}
                                    />
                                </Col>
                                
                            )}
                        </>
                    )
                })
            }
            </Row>     
        </section> 
    
    
    );
}
 
export default TeamList;