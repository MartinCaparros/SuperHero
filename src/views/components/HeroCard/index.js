import React from 'react';
import {Card,Button} from 'react-bootstrap';
import { useSelector,useDispatch } from 'react-redux';
import { setCurrentTeam } from 'core/team/reducer';

const HeroCard = ({hero,hero:{id,name,image:{url},biography:{fullname,alignment}}}) => {

    const {currentTeam} = useSelector(state=>state.team);
    const dispatch = useDispatch();
    
    const handleOnClick=()=>{

        dispatch(setCurrentTeam([...currentTeam,hero]))
        console.log(currentTeam)
    };

    const isInCurrentTeam = !!currentTeam.find(hero=> hero.id === id);
    const isCurrentTeamFull = currentTeam.length>=6
    const sameAlignmentHeroes= currentTeam.filter(hero => hero.biography.alignment === alignment).length
    
    const buttonDisabled = isInCurrentTeam || isCurrentTeamFull || sameAlignmentHeroes>=3


    return ( 
        <Card className="m-3" style={{ width: '10rem' }}>
            <Card.Img variant="top" src={url} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                {fullname}
                </Card.Text>
            </Card.Body>
            {isInCurrentTeam && <p>This hero is already on your team!</p>}
            {isCurrentTeamFull && <p>Your team is already full!</p>}
            {sameAlignmentHeroes>=3 && <p>You already have 3 {alignment} heroes!</p>}
            { buttonDisabled       
                ? <Button 
                    variant="outline-danger"
                    disabled
                    >Can not add this Hero!
                </Button> 
                : 
                <Button 
                    variant="outline-primary"
                    onClick={()=>handleOnClick()}
                    >Recruit this Hero!
                </Button> 
            }
        </Card>

    );
}
 
export default HeroCard;