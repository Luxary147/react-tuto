import { Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import CounterStyles from './counter-styles';
//import useStyles from './counter-styles';


const Counter = () => {
    const [count, setCount] = useState(0);
    //Importar estilos css desde otro archivo ts
    const classes = CounterStyles();

    const onIncrementCount = () => {
        setCount(count + 1);
    };

    const onDecrementCount = () => {
        if (count != 0) {
            setCount(count - 1);
        }
    };


    return (
        <div className={classes.container}>
            <Button onClick={onDecrementCount}> - </Button>
            <Typography> {count}</Typography>
            <Button onClick={onIncrementCount}> + </Button>
        </div>
    );
};

export default Counter;