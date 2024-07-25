import React, { useState } from 'react';
import styled from "styled-components";
import  { AxiosError } from 'axios';

//Styled components

export const Form = styled.form`
 display: flex;
  flex-direction: column;
  width: 400px;
  margin: auto;
  padding:18px;
  border-radius: 6px;
  border: solid 3px #9f939495;
  background-color: #eec6d52d;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-weight: light;
  margin-right: 12px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

export const TextArea = styled.textarea`
  width: 100%;
height: 150px;
padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  resize: none;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;
export const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
`;

export const SuccessMessage = styled.div`
  color: #0e6940;
  font-size: 14px;
`;

export const InfoForm: React.FC = () => {
  const [infoArray, setInfoArray] = useState([{ fname: '', lname: '' }]);
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newArray = [...infoArray];
    newArray[index] = { ...newArray[index], [name]: value };
    setInfoArray(newArray);
    setErrorMessage('')
    setSuccessMessage('')
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      
      setSuccessMessage('Your information is added Successfuly! :)')

    } catch (error) {


      if ((error as AxiosError).response && (error as AxiosError).response?.status === 409) {
        setErrorMessage('data is already added')
      }
      else {
        setErrorMessage('Failed to Add Info')
      }

    }
    setInfoArray([{ fname: '', lname: '' }])
  };

  return (
    <Form onSubmit={handleSubmit}>
      {infoArray.map((info, index) => (
        <div key={index}>
          <FormGroup>
            <Label>First Name
            </Label>
            <Input type='text' name='fname' value={info.fname} onChange={(e) => handleChange(index, e)} required />
          </FormGroup>

          <FormGroup>
            <Label>Last Name
            </Label>
            <Input type='text' name='lname' value={info.lname} onChange={(e) => handleChange(index, e)} required />
          </FormGroup>
        </div>
      ))}
      <Button type="submit">Add Info</Button>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
    </Form>
  );
};
