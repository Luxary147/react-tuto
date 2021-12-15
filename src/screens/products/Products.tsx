import React from 'react';
import { Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Counter from '../../components/counter';
import ProductStyles from './products-styles';

const Products = () => {
  const navigate = useNavigate();

  const classes = ProductStyles();

  const onClickButton = () => {
    navigate('details');
  };




  return (
    <div className={classes.container}>
      <Typography className={classes.h1}>Soy la página de productos</Typography>

      <Counter />

      <Button onClick={onClickButton}>Ve a la página de detalles</Button>
    </div>
  );
};

export default Products;
