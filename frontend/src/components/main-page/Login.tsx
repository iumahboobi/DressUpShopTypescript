
import React, { useState } from 'react'
import styled from 'styled-components'


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
const Label=styled.label`
display: block;
font-size: 18px;
margin-bottom: 8px;
text-align: left;
`
const Input=styled.input`
width: 100%;
padding: 12px;
border: 1px solid #ced4da;
font-size: 16px;
`
const Button=styled.button`
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

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    return <FormContainer>
        <div>
            <img   width={'50%'} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9YbM1j3ND4zY3EITRA9hD5H-afFGVzLNIrQ&usqp=CAU' />
        </div>
        <h3>Please Log in</h3>
        <form>
            <FormGroup>
                <Label htmlFor='email' >Email</Label>
                <Input type='email' id='email' value={email} onChange={(e)=> setEmail(e.target.value)} required  />
            </FormGroup>
            <FormGroup>
                <Label htmlFor='password' >Password</Label>
                <Input type='password' id='password' value={password} onChange={(e)=> setPassword(e.target.value)} required  />
            </FormGroup>
            <FormGroup>
                <Button type='submit'>Login</Button>
            </FormGroup>
        </form>
    </FormContainer>

}