import React, { useEffect, useState } from "react";
import axios from 'axios';

interface Product {

_id: string;
title: string;
price: number;
description:string

}


export const DataBase = () => {
    const [data, setData] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/products');
                console.log('response',response)
                setData(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Product List</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {data.map(product => (
                        <li key={product.title}>
                            <h3>{product.description}</h3>
                            <p>Price: ${product.price}</p>
                            <p></p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
