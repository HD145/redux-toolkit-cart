import React, { useEffect, useState } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button, CircularProgress, Box } from '@mui/material';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../features/cartSlice';
import useCartStore from '../app/zustStore';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const carts = useSelector(state => state.products)

  const dispath = useDispatch();

  //zustand impl

  const {addToCart} = useCartStore();

  const handleLoadProducts = async()=>{
    setLoading(true)
    try{
        const data = await axios.get("https://fakestoreapi.com/products");
        setProducts(data?.data ?? [])
    }catch(e){
        console.log(e);
    }finally{
        setLoading(false)
    }
  }
  
  useEffect(() => {
    handleLoadProducts();
  }, []);

  const handleAddProduct = (item)=>{
    addToCart(item);
    dispath(addProduct(item))
  }

  if (loading) {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CircularProgress />
    </Box>
  );
}

  return (
    <Grid container spacing={5} p={3}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <Card sx={{ maxWidth: 345, borderRadius:3}}>
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
              <Button variant="contained" fullWidth sx={{ mt: 1 }} onClick={()=>handleAddProduct(product)}>
                Buy Now
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Products;
