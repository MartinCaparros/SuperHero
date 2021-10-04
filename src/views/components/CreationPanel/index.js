import React,{useState} from 'react';
import {HeroCard} from 'views/components';
import axios from 'axios';
import {Form,FormControl,Button,Container,Row,Col} from 'react-bootstrap';

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
            const response = await axios.get(`https://superheroapi.com/api.php/10218740354315571/search/${heroName}`)

            if(response.data.response ==="error"){
                setError(response.data.error)
            }else{
                setHeroResult(response.data.results)
            }
        }catch(error){
            console.log(error)
        }finally{
            setError('')
            setIsSubmitting(false)
        }
    }
    return ( 

        <div>
            <Form className="d-flex mt-4">
                <FormControl
                    type="search"
                    placeholder="Search your SuperHero"
                    className="mr-2"
                    aria-label="Search"
                    onChange={heroNameSearch}
                />
                <Button disabled={isSubmitting} variant="outline-success" onClick={()=>searchHero()}>Search</Button>
            </Form>
            {error && <p>{error}</p>}
            <Container>
                <Row>
                    {heroResult.map( hero =>
                        <Col sm>
                            <HeroCard
                                id={hero.id}
                                name={hero.name}
                                image={hero.image.url}
                                fullname={hero.biography['full-name']}
                                alignment={hero.biography.alignment}
                            >
                            </HeroCard>
                        </Col>
                    
                    )}
                </Row>
            </Container>
        </div>



    );
}
 
export default CreationPanel;