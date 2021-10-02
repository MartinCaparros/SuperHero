import axios from 'axios';
import React,{useState} from 'react';
import {Form,FormControl,Button} from 'react-bootstrap';

const CreationPanel = () => {

    const[hero,setHero]=useState('');

    const heroName= (e)=>{
        setHero(e.target.value)
    }
    
    const searchHero = async () => {
        try{
            const response = await axios.get(`https://superheroapi.com/api/10218740354315571/search/${hero}`)

            console.log(response)

        }catch(error){
            console.log(error)
        }finally{

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
                    onChange={heroName}
                />
                <Button onClick={()=>searchHero()}variant="outline-success">Search</Button>
            </Form>
            

        </div>


     );
}
 
export default CreationPanel;