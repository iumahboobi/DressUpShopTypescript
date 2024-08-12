import React, { useEffect } from 'react'
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import axios from 'axios';
import { AccessoriesProducts } from '../../../src/pages/AccessoriesProducts';
import { MenProducts } from '../../pages/MenProducts';
import { WomenProducts } from '../../pages/WomenProducts';
import { Electronics } from '../../../src/pages/ElectroItems';
import { Banner } from './Banner';
import { Cart } from './Cart';
import { All } from './All';
import { Product } from './Card';
import { Header } from './Header';
import { Favorite } from './Favorite';
import { Login } from './LoginForm';
import { AddInfos } from './AddInfos';
import { AddProducts } from './AddProducts';
import { RegisterForm } from './RegisterForm';



interface HomeProps {



}


  

export const Home: React.FC<HomeProps> = () => {

    const [products, setProducts] = useState<Product[]>([])
    const [addProducts, setAddProduct] = useState<Product[]>([])
    const [favProducts, setFavProducts] = useState<Product[]>([])


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/products`)
                setProducts(response.data)
            } catch (error) {
                console.log('Error Fetching data:', error)
            }
        }
        fetchData()
    }, [])

    useEffect(() => {
        const storedProducts = localStorage.getItem('addProducts')
        const storedFavProducts = localStorage.getItem('favProducts')

        if (storedProducts) {
            setAddProduct(JSON.parse(storedProducts))
        }

        if (storedFavProducts) {
            setFavProducts(JSON.parse(storedFavProducts))

        }
    }, [])

    /*Adding product or item to Cart*/
    const handleAddToCart = (product: Product) => {

        const productWithUniqueID = { ...product, id: uuid() }
        const updatedProducts = [...addProducts, productWithUniqueID]
        const isProductInCart = addProducts.some(item => item.title === product.title)

        if (!isProductInCart) {
            setAddProduct(updatedProducts)
        }
        else {
            alert('Item already added!!')
        }

        /**Store Product in local storage */
        localStorage.setItem('addProducts', JSON.stringify(updatedProducts))
    }

    /*Deleting a product or item from the Cart*/
    const onDeleteItem = (productId: string) => {

        const updatedProducts = addProducts.filter(product => product.id !== productId)
        setAddProduct(updatedProducts)

        /**Store updated in local storage after deleting */
        localStorage.setItem('addProducts', JSON.stringify(updatedProducts))
    }

    /*Adding product or item  favorites*/
    const handleAddToFavorite = (product: Product) => {
        const favProductWithUniqueId = { ...product, id: uuid() }
        const updateFavProducts = [...favProducts, favProductWithUniqueId]
        const isProductInFavorite = favProducts.some(item => item.title === product.title)

        if (!isProductInFavorite) {
            setFavProducts(updateFavProducts)
        }
        else {
            alert('Item already added to Favorites')
        }

        /**Store Favorites in local storage */
        localStorage.setItem('favProducts', JSON.stringify(updateFavProducts))
    }

    /*Deleting product or item to Favorites*/
    const removeFromFavorites = (productId: string) => {
        const updatedFavProducts = favProducts.filter(product => product.id !== productId)
        setFavProducts(updatedFavProducts)
    }

    return (
        <div>
            <Header cartItemCount={addProducts.length} favItemCount={favProducts.length} />
         
            <Routes>
                <Route path="/" element={<Banner/>} />
                <Route path="/cart" element={<Cart addProducts={addProducts} onDelete={onDeleteItem} />} />
                <Route path="/favorite" element={<Favorite addProducts={favProducts} onAddToCart={handleAddToCart} onDelete={removeFromFavorites} />} />
                <Route path="/all" element={<All products={products} handleAddToCart={handleAddToCart} handleAddToFavorite={handleAddToFavorite} />} />
                <Route path="/men" element={<MenProducts menProducts={products} handleAddToCart={handleAddToCart} handleAddToFavorite={handleAddToFavorite} />} />
                <Route path="/women" element={<WomenProducts womenProducts={products} handleAddToCart={handleAddToCart} handleAddToFavorite={handleAddToFavorite} />} />
                <Route path="/accessories" element={<AccessoriesProducts accessories={products} handleAddToCart={handleAddToCart} handleAddToFavorite={handleAddToFavorite} />} />
                <Route path="/electronics" element={<Electronics electroProducts={products} handleAddToCart={handleAddToCart} handleAddToFavorite={handleAddToFavorite} />} />
                <Route path="/addProducts" element={<AddProducts/>} />
                <Route path="/infoForm" element={<AddInfos />} />
                <Route path="/loginForm" element={<Login/>} />
                <Route path="/registerForm" element={<RegisterForm/>} />
            </Routes>
        </div>
    )
}
