import React from 'react';
import { useHistory } from 'react-router';
import { Navbar,Nav,NavDropdown} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMask } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    
    const {push} = useHistory()

    return(
        <header className="container-fluid">
            <Navbar className="container-fluid" bg="light" expand="lg">
                <div>
                    <FontAwesomeIcon icon={faMask} size="3x" onClick={()=>push("/home")}/>
                </div>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse className="d-flex justify-content-center" id="navbarScroll">
                    <Nav
                    className="container-fluid d-flex justify-content-center mr-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                    >
                    <div className="container-fluid d-flex justify-content-center">
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