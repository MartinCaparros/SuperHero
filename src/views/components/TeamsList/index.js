import React from 'react';
import { useSelector } from 'react-redux';
import {Col,Row} from 'react-bootstrap';
import { HeroCard } from 'views/components';
    
const TeamList = () => {

    const {teams} = useSelector(state=>state.team)
    
    return ( 
    
        <section>
            <div className="text-center"> 
                <h2>This are your teams</h2>   
            </div>
            <Row className="m-0">
                {teams.map(teamName => {
                    return(

                    <h3 className="text-center">Team: {teamName.name}</h3>

                    )
                })
                }
                {teams.map( teamList => teamList.team.map(hero => {
                    return(
                        <Col
                        sm={4}
                        lg={2}
                        key={hero.id}
                    >
                        <HeroCard
                            hero={hero}
                        />
                    </Col>
                    )
                }))}
            </Row>     
        </section> 
    
    
    );
}
 
export default TeamList;