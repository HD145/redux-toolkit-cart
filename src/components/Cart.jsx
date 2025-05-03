import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Typography, Box, Divider } from '@mui/material';
import { addProduct, removeProduct } from '../features/cartSlice';

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  return (
    <Box sx={{ p: 4 }}>
     
      {products?.length === 0 ? (
        <Typography>Your cart is empty.</Typography>
      ) : (
        products.map((item) => (
          <Box key={item.id} sx={{ mb: 3 }}>
            <Typography variant="h6">{item.title}</Typography>
            <Typography>Price: ${item.price}</Typography>
            <Typography>Quantity: {item.quantity}</Typography>
            <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
              <Button
                variant="contained"
                size="small"
                onClick={() => dispatch(addProduct(item))}
              >
                +
              </Button>
              <Button
                variant="outlined"
                size="small"
                onClick={() => dispatch(removeProduct(item.id))}
                // disabled={item.quantity === 1}
              >
                −
              </Button>
            </Box>
            <Divider sx={{ mt: 2 }} />
          </Box>
        ))
      )}
    </Box>
  );
};

export default Cart;
