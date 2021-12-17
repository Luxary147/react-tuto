//import { red } from '@mui/material/colors';
import { CircularProgress } from '@mui/material';
import { makeStyles } from '@mui/styles';
//import theme from '../../theme';

const ProductStyles: any = makeStyles({
    container: {
        marginTop: '12%',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },

    h1: { fontSize: '40px !important' },

    spiner:
        { display: 'flex', margin: 'auto' },

    MuiCircularProgress: {
        width: '80px !important',
        height: '80px !important'
    },

    pageContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: 'auto '

    }


});

export default ProductStyles;
