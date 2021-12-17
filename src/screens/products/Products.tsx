import React, { useEffect, useState } from 'react';
import { Typography, Button, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Counter from '../../components/counter';
import ProductStyles from './products-styles';
import ProductsService from '../../services/ProductsService';
import ProductItem from '../../components/products-item';

const Products = () => {
  const [products, setProducts] = useState([]);
  console.log(products)
  const navigate = useNavigate();

  const classes = ProductStyles();

  const onClickButton = () => {
    navigate('details');
  };

  useEffect(() => {
    async function CallProducts() {
      //esta Funcion nos sirve para esperar a que se obtengan los datos de la llamada getProducts
      //async y Await sirve para que se espere a tener los datos antes de almacenarlos o mostrarlos
      //si esto lo que nos ejectura es una promesa la cual nos mostrara datos vacios mientras no obtenga los de verdad
      console.log('calling');
      const result = await ProductsService.getProducts();
      //console.log(result.data);

      setProducts(result.data)
    }

    CallProducts();
  }, []);


  if (products.length === 0) {
    //return <h1> Cargando </h1>;
    return (
      <div className={classes.spiner}>
        <CircularProgress />
      </div>
    );

  }

  return (
    <div className={classes.container}>
      <Typography className={classes.h1}>Soy la página de productos</Typography>

      <Counter />

      <Button onClick={onClickButton}>Ve a la página de detalles</Button>

      <div className={classes.pageContainer}>
        {products.map((item) => {
          return <ProductItem product={item} />;
        })}

      </div>



    </div>

  );
};

export default Products;
