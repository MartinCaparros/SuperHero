import React,{ useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { FloatingLabel,Form,Button } from 'react-bootstrap';
import { Formik } from 'formik';
import { Container } from './styled';


const Login = () => {
    
    const {push} = useHistory()
    const [error, setError]=useState('')

    return(
        <div className="d-flex justify-content-center mt-5">
            <Formik
                initialValues={{
                    email:'',
                    password:''
                }}
                validate ={values => {
                    const errors={};
                    if (!values.email) {
                        errors.email= <p>Required</p>;
                    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = <p>Invalid email adress</p>;
                    };
                    return errors;
                }}
                onSubmit = { async (values, { setSubmiting } ) => {
                    try {
                        setError('')
                        const body = {
                            email: values.email,
                            password:values.password,
                        }
                        const response = await axios.post('http://challenge-react.alkemy.org/', body)
                        localStorage.setItem('userToken',response.data.token)
                        push("/home")
                    } catch(error) {
                        setError('Wrong password, please try again')
                    } finally {
                    }
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    isSubmitting,
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    
                })=> (
                    <Container className="p-5">
                        <h5 className="mb-5 text-center">Welcome to SuperHero API</h5>
                        <form onSubmit={handleSubmit}>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Email address"
                                className="mb-3"
                            >
                                <Form.Control 
                                    type="email"
                                    name="email"
                                    placeholder="name@example.com"
                                    value={values.email} 
                                    onChange={handleChange}
                                    onBlur={handleBlur}

                                />
                            </FloatingLabel>
                            {errors.email && touched.email && errors.email}
                            <FloatingLabel controlId="floatingPassword" label="Password">
                                <Form.Control 
                                    name="password" 
                                    type="password" 
                                    placeholder="Password" 
                                    value={values.password} 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </FloatingLabel>
                            {error && ( <p>Something seems wrong, please try again</p> )}
                            <div className=" d-flex justify-content-center">
                                <Button type="submit" disabled={isSubmitting} className="mt-2">Submit</Button>
                            </div>
                        </form>

                    </Container>

                    )
                }
            </Formik>
        </div>
    )
};


export default Login;