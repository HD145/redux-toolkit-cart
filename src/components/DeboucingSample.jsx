import React, { useEffect } from 'react'
import { useState } from 'react'
import { Grid, Card, CardContent, CardMedia, Typography, Button, CircularProgress, Box } from '@mui/material';
import axios from 'axios';


export const DeboucingSample = () => {

    const [value, setValue] = useState(null)
    const [products, setProducts] = useState([]);


    const handleLoadProducts = async () => {
        try {
            const data = await axios.get(`https://fakestoreapi.com/products/${value}`);
            setProducts(data?.data !== '' ? [data?.data] : [])
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        const val = setTimeout(() => {
            if (value) handleLoadProducts();
        }, 1000)
        return () => clearTimeout(val);
    }, [value])

    return (
        <>
            <Box sx={{ p: 10 }}>

                <input placeholder='Type' type="text" onChange={(e) => setValue(e.target.value)} />
                <Grid container spacing={5} p={3}>
                    {products.length > 0 ? products.map((product) => (
                        <Grid item xs={12} sm={6} md={4} key={product.id}>
                            <Card sx={{ maxWidth: 345, borderRadius: 3 }}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={product.image}
                                    alt={product.title}
                                    sx={{ objectFit: 'contain', padding: 2 }}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div" noWrap>
                                        {product.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" noWrap>
                                        {product.description}
                                    </Typography>
                                    <Typography variant="subtitle1" sx={{ mt: 1 }}>
                                        ${product.price}
                                    </Typography>

                                </CardContent>
                            </Card>
                        </Grid>
                    )) : (
                        <Typography variant='h6' sx={{ color: "red" }}>Nothing to display.</Typography>
                    )}
                </Grid>
            </Box>
        </>
    )
}
