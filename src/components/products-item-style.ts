import { makeStyles } from '@mui/styles';
//import theme from '../theme';

const ProductItemStyles: any = makeStyles({
    container: {
        position: 'relative',
        margin: '10px',
        textAlign: 'center',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'red',
        width: '270px ',
        padding: '10px',
        borderRadius: '6px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',

        '&:hover $imageContainer': {
            top: '-35px'
        }
    },

    texto: {
        display: 'block',

    },

    inferior: {
        display: 'flex',
        textAlign: 'center',
    }
});

export default ProductItemStyles;
