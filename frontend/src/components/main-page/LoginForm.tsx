
import React, { useState } from 'react'
import styled from 'styled-components'
import axios, { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';


const FormContainer = styled.div`
background-color: #61dafb00;
padding:40px;
border-radius: 8px;
box-shadow: 0 4px 14px rgba(0,0,0,0.3);
margin: 40px auto;
width: 350px;

@media (max-width:431px){
width:auto ;
margin: 10px;
padding: 30px;
}
`
const FormGroup = styled.div`
margin-bottom: 20px;
`
const Label = styled.label`
display: block;
font-size: 18px;
margin-bottom: 8px;
text-align: left;
`
const Input = styled.input`
width: 100%;
padding: 12px;
border: 1px solid #ced4da;
font-size: 16px;
`
const Button = styled.button`
width: 100%;
  padding: 12px;
  background-color: #9cebd5;
  border: none;
  border-radius: 6px;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #eec6d5;
  }
`

export const Login: React.FC = () => {

    const [credentials, setCredentials] = useState({ email: '', password: '' })
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')
    const navigate = useNavigate();
  


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const { name, value } = e.target
        setCredentials((prevCredentials)=>({ ...prevCredentials, [name]: value }))
        setErrorMessage('')
        setSuccessMessage('')
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {

            const response= await axios.post('http://localhost:5000/api/users',credentials)
            
            if(response.status ===200){
                setSuccessMessage('Login Successfull Redirecting...')
                setTimeout(()=>{
                    navigate('/addProducts')
                },1000)
            }

        } catch (error) {
            if((error as AxiosError).response && (error as AxiosError).response?.status===401 )
                {setErrorMessage('Invalid email or Password')} 

            else {setErrorMessage('Failed To Login')}
        }

    }

    return <FormContainer>
        <div>
            <img width={'50%'} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9YbM1j3ND4zY3EITRA9hD5H-afFGVzLNIrQ&usqp=CAU' />
        </div>
        <h3>Please Log in</h3>
        <form onSubmit={handleSubmit}>
            <FormGroup>
                <Label htmlFor='email' >Email</Label>
                <Input type='email' id='email' name='email' value={credentials.email} onChange={handleChange} required />
            </FormGroup>
            <FormGroup>
                <Label htmlFor='password' >Password</Label>
                <Input type='password' id='password' name='password' value={credentials.password} onChange={handleChange} required />
            </FormGroup>
            <FormGroup>
                <Button type='submit'>Log In</Button>
            </FormGroup>
        </form>
    </FormContainer>
}