
import React, { useState } from 'react'
import styled from 'styled-components'
import axios, { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { ErrorMessage, SuccessMessage } from './InfoForm';


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

export const RegisterForm: React.FC = () => {

    const [registerArray, setRegisterArray] = useState([{ email: '', password: '' }])
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')



    const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        const newArray = [...registerArray]
        newArray[index] = { ...newArray[index], [name]: value }
        setRegisterArray(newArray)
        setErrorMessage('')
        setSuccessMessage('')
    }


    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:5000/api/auth/register', registerArray)
            setSuccessMessage('Registeration Successful. Please Login')
            setRegisterArray([{ email: '', password: '' }])
        }
        catch (error) {
            setErrorMessage(`User with Email  already exist. Please Log In`)
            setSuccessMessage('')
        }
    }

    return <FormContainer>
        <div>
        </div>
        <h3>Please Register</h3>
        <form onSubmit={handleRegister}>
            {registerArray.map((info, index) => (
                <div key={index}>
                    <FormGroup>
                        <Label htmlFor='email' >Email</Label>
                        <Input type='email' id='email' name='email' value={info.email} onChange={(e) => handleChange(index, e)} required />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='password' >Password</Label>
                        <Input type='password' id='password' name='password' value={info.password} onChange={(e) => handleChange(index, e)} required />
                    </FormGroup>

                </div>))}
            <FormGroup>
                <Button type='submit'>Register</Button>
            </FormGroup>
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
        </form>

    </FormContainer>
}