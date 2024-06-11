import React, { useState } from 'react'
import styled from "styled-components";
import axios, { AxiosError } from 'axios';
import { ErrorMessage, SuccessMessage } from './InfoForm';

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
  background-color: #b30000d3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #741321
  }
`;

export const ProductForm: React.FC = () => {

    const [products, setProducts] = useState([{ title: '', price: 0, description: '', category: '', image: '', rating: { rate: 0, count: 0 } }])
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')

    const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target
        const newProducts = [...products]

        if (name === 'rate' || name == 'count') {
            newProducts[index] = {
                ...newProducts[index], rating: { ...newProducts[index].rating, [name]: Number(value) }
            }
        }
        else if (e.target instanceof HTMLInputElement && e.target.type === 'file' && e.target.files && e.target.files[0]) {

            const reader = new FileReader()
            reader.onload = () => {
                newProducts[index] = { ...newProducts[index], image: reader.result as string }
                setProducts(newProducts)
            }
            reader.readAsDataURL(e.target.files[0])
        }
        else { newProducts[index] = { ...newProducts[index], [name]: value } }

        setProducts(newProducts)
        setErrorMessage('')
        setSuccessMessage('')
    }


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()


        //check if all fields are filled

        for (const product of products) {
            if (!product.title || product.price == 0 || !product.description || !product.category || !product.image) {
                setErrorMessage('Please fill all required fields')
                return
            }
        }

        try {
            const response = await axios.post('http://localhost:5000/api/products', products)

        } catch (error) {
            if ((error as AxiosError).response && (error as AxiosError).response?.status === 409) {
                setErrorMessage('Product is already added')
                setSuccessMessage('')
            }
            else {
                setSuccessMessage('Product is added successfuly')
                setProducts([{ title: '', price: 0, description: '', category: '', image: '', rating: { rate: 0, count: 0 } }]);
            }
        }
    }

    return (<Form onSubmit={handleSubmit}>
        {products.map((product, index) => (<div key={index}>
            <FormGroup>
                <Label>Title
                </Label>
                <Input type='text' name='title' value={product.title} onChange={(e) => handleChange(index, e)} />
            </FormGroup>
            <FormGroup>
                <Label>Price
                </Label>
                <Input type='number' name='price' value={product.price} onChange={(e) => handleChange(index, e)} min={1} step={'any'} />
            </FormGroup>
            <FormGroup>
                <Label>Description
                </Label>
                <TextArea placeholder='Max 350 characters' name='description' value={product.description} onChange={(e) => handleChange(index, e)} maxLength={350} />

            </FormGroup>
            <FormGroup>
                <Label>Category</Label>
                <select className="form-control" name="category" value={product.category} onChange={(e) => handleChange(index, e)}>
                    <option value="">Select a category</option>
                    <option value="men's clothing">Men's Clothing</option>
                    <option value="women's clothing">Women's Clothing</option>
                    <option value="jewelry">Jewelry</option>
                    <option value="electronics">Electronics</option>
                </select>
            </FormGroup>
            <FormGroup>
                <Label>Image
                </Label>
                <Input type='file' name='image' onChange={(e) => handleChange(index, e)} />

            </FormGroup>
            <FormGroup>
                <Label>Rating</Label>
                <Input type="number" name="rate" value={product.rating.rate} onChange={(e) => handleChange(index, e)} min={1} max={5} step={'any'} />
            </FormGroup>
            <FormGroup>
                <Label>Count</Label>
                <Input type="number" name="count" value={product.rating.count} onChange={(e) => handleChange(index, e)} min={1} />
            </FormGroup></div>))
        }
        <Button type="submit">Add Product</Button>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
    </Form>)

}