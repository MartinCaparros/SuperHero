import React,{ useState } from 'react' ;
import { useHistory } from 'react-router';
import { Col,Row,Button, Modal} from 'react-bootstrap';
import { HeroCard } from 'views/components';
import { useSelector,useDispatch } from 'react-redux';
import { setTeams,setCurrentTeam } from 'core/team/reducer';

const CurrentTeamPanel = () => {

    const {push} = useHistory()
    

    const [teamNickName,setTeamNickName] = useState('')
    const [showModal,setShowModal] = useState(false)
    
    const {currentTeam} = useSelector(state => state.team)
    const {teams} = useSelector(state=> state.team)
    const dispatch=useDispatch()

    const saveTeam = () => {
        const newTeam = {team:currentTeam,name:teamNickName}
        dispatch(setTeams([...teams,newTeam]))
        dispatch(setCurrentTeam([]))
        setShowModal(true)
    }

    return ( 
        <>
            {currentTeam.length>0 
                ?<section>
                    <div className="text-center"> 
                        <h2>This is your team</h2>   
                    </div>
                    <Row className="m-0">
                    {currentTeam.map( hero =>{
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
                    }            
                    )}
                    {currentTeam.length===6 &&
                    
                        <div className="d-flex justify-content-center m-3">
                            <input 
                                className="w-25"
                                value={teamNickName}
                                placeholder="Introduce your Team nickname"
                                onChange={ e => setTeamNickName(e.target.value)}
                                >
                                </input>
                            <Button className="btn-success" onClick={()=>{saveTeam()}}>Save your Team!</Button>
                        </div> 
                    }
                    </Row>
                </section>
                :<section>
                    <div className="container-fluid mt-3">
                        <h2 className="text-center">
                            Please recruit some Heroes first, click on the button down below
                        </h2>
                        <div className="d-flex justify-content-center">
                            <Button onClick={()=>push("/TeamLineUpPanel")}>Click me</Button>
                        </div>
                    </div>
                </section> 
                
            }
                
            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered 
                show={showModal}         
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Your Team has been saved!
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        You can now see your team on the Team List in the home page
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={()=>setShowModal(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
 
export default CurrentTeamPanel;