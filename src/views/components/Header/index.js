import React from 'react';
import { useHistory } from 'react-router';
import { Navbar,Nav,NavDropdown,Badge} from 'react-bootstrap';
import { CustomIcon } from './styled';
import { faMask,faUsers } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

const Header = () => {
    
    const {push} = useHistory()

    const {currentTeam} = useSelector(state=>state.team)

    return(
        <header className="container-fluid">
            <Navbar className="container-fluid" bg="light" expand="lg">
                <div className="d-flex align-items-center">
                    <CustomIcon icon={faMask} size="3x" onClick={()=>push("/home")}/>
                    <h5 className="p-2">SuperHero API</h5>
                </div>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse className="d-flex justify-content-center" id="navbarScroll">
                    <Nav
                    className="container-fluid d-flex ms-3 mr-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                    >
                        <CustomIcon 
                            icon={faUsers}
                            size="2x"
                            onClick={()=>push("/CurrentTeamPanel")}
                        />
                            {
                                currentTeam.length>0 &&
                                <Badge pill bg="light" text="dark">
                                    <p>{currentTeam.length}</p>
                                </Badge>
                            }
                        <div className="container-fluid">
                            <NavDropdown title="Actions" id="navbarScrollingDropdown">
                                <NavDropdown.Item onClick={()=>push("/TeamLineUpPanel")} >Team Creator</NavDropdown.Item>
                                <NavDropdown.Item onClick={()=>push("/TeamList")} >Team List</NavDropdown.Item>
                            </NavDropdown>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}


export default Header