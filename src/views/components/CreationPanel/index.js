import React,{useState} from 'react';
import {HeroCard} from 'views/components';
import axios from 'axios';
import {Form,Button,Container,Row,Col,FloatingLabel,Spinner} from 'react-bootstrap';

const CreationPanel = () => {

    const[heroName,setHeroName]=useState('');
    const [heroResult,setHeroResult]=useState([]);
    const [isSubmitting,setIsSubmitting]=useState(false)
    const[error,setError]=useState('');

    const heroNameSearch= (e)=>{
        setHeroName(e.target.value)
    }
    
    const searchHero = async () => {
        try{
            setIsSubmitting(true)
            setError('')
            setHeroResult([])
            const response = await axios.get(`https://superheroapi.com/api.php/10218740354315571/search/${heroName}`)

            if(response.data.response ==="error"){
                setError(response.data.error)
            }else{
                setHeroResult(response.data.results)
            }
        }catch(error){
            console.log(error)
        }finally{
            setIsSubmitting(false)
        }
    }
    const handleOnEnter= e => {
        const {key} = e
        if(key === "Enter"){
            searchHero()
            e.preventDefault()
        }
    };
    return ( 

        <div>
            <Form className="d-flex justify-content-center align-items-center mt-4">
                <FloatingLabel
                    controlId="floatingInput"
                    label="Search your SuperHero"
                    className="d-flex"
                >
                    <Form.Control 
                        type="search"
                        name="superHeroName"
                        placeholder="Search your SuperHero"
                        onChange={heroNameSearch}
                        onKeyPress={handleOnEnter}
                    />
                    <Button disabled={isSubmitting} variant="outline-primary" onClick={()=>searchHero()}>Search</Button>
                </FloatingLabel>
            </Form>
            {error && <span className="text-danger mt-4">{`${error.charAt(0).toUpperCase()}${error.slice(1)}`}</span>}
            <Container>
                {!isSubmitting  
                    ? <Row>
                        {heroResult.map( hero =>
                            <Col
                                sm
                                key={hero.id}
                            >
                                <HeroCard
                                    hero={hero}
                                >
                                </HeroCard>
                            </Col>
                        
                        )}
                    </Row>
                    :
                    <div className="d-flex justify-content-center m-5">
                        <Spinner animation="border" variant="primary" /> 
                    </div>
                }     
            </Container>
        </div>
    );
}
 
export default CreationPanel;