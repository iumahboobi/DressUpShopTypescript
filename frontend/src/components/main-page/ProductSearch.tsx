
import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Product } from './Card';
//import { products } from '../../data/products'
import styled from 'styled-components';
import { ProductCard, ProductImage, ProductTitle, ProductPrice } from './Cart';


const SearchContainer = styled.div`
position: relative;
`

const Searchicon = styled(FontAwesomeIcon)`

margin:14px;
position:absolute;
`

const InputContainer = styled.input`
padding: 12px 40px 12px 12px;
border-radius: 8px;
width: 100%;
text-align: right;
font-size: 14px;
&::placeholder {
    color: #808080a6;
}

@media (max-width:375px){
 width: auto;
 padding: 12px 40px;
}
`
const SearchList = styled.div`
background-color: #f0f8ff;
position: absolute;
list-style-type: none;
padding: 16px;
z-index: 1;
width:40%;
height: 400px;
overflow: scroll;

@media (max-width:375px){
width: 100%;
padding: 0;
}
`
const SearchItem = styled.ul<{ isProductListItem: boolean }>`

display: flex;
justify-content: space-between;
gap: 40px;
border-bottom: solid 1px lightgray ;
align-items: center;
margin-bottom: 10px;
&:hover {
    background-color: #eec6d56f;
}
@media (max-width:375px){
display:block;
}
`
const SearchImage = styled.img`
width: 80px; /* Adjust width as needed */
height: 80px; /* Adjust height as needed */
background-color: lightgray; /* Placeholder color */
margin-right: 10px;
`;

export const ProductSearch = () => {

    const [searchQuery, setSearchQuery] = useState<string>('')
    const [searchResult, setSearchResult] = useState<Product[]>([])
    const [products, setProducts] = useState<Product[]>([])
    const searchListRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/products')
                console.log('response', response)
                setProducts(response.data)
            } catch (error) {
                console.log('Error Fetching data:', error)
            }
        }
        fetchData()
    }, [])
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.addEventListener('mousedown', handleClickOutside)
        }

    }, [])

    useEffect(() => {

        if (searchQuery === '' && inputRef.current) {
            inputRef.current.value = ''
            inputRef.current.setSelectionRange(1, 1)
        }

    }, [searchQuery])

    const handleSearch = (query: string) => {
        setSearchQuery(query)

        if (query.trim() === '') {
            setSearchResult([])
        }
        else {
            const filterdProducts = products.filter(product =>
                product.category.toLowerCase().includes(query.toLowerCase()))
            setSearchResult(filterdProducts)
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleSearch(event.target.value)
    }

    const handleClickOutside = (event: MouseEvent) => {
        if (searchListRef.current && !searchListRef.current.contains(event.target as Node)) {
            setSearchResult([])
        }
    }

    const onHandleFocus = () => {
        handleSearch(searchQuery)

    }

    return (<>

        <SearchContainer>
            <Searchicon icon={faSearch} size={'1x'} />
            <InputContainer
                type='text'
                placeholder={searchQuery ? '' : 'Search for a Product by Category'}
                value={searchQuery}
                onChange={handleChange}
                onFocus={onHandleFocus}
                ref={inputRef}
            />
        </SearchContainer>
        {searchResult.length > 0 && (
            <SearchList ref={searchListRef}>{searchResult.map(product => (
                <SearchItem key={product.id} isProductListItem={true}>
                    <div>
                        <SearchImage src={product.image} alt={product.title} />
                    </div>
                    <ProductTitle>{product.title}</ProductTitle>
                    <ProductPrice>{product.price}</ProductPrice>
                </SearchItem>
            ))}</SearchList>
        )}
    </>)
}