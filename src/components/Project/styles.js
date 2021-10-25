import { makeStyles } from '@mui/styles';
import { blueGrey } from '@mui/material/colors';

export const useStyles = makeStyles({
    title:
    {
        '&&': {
            fontFamily: `'Josefin Sans', sans-serif`,
            color: '#cacaca',
            textShadow: '1px 2px 1px #000000CC',
            fontWeight: 'bold',
            letterSpacing: 1.5,
            lineHeight: 1
        }
    },
    subtitle:
    {
        '&&': {
            fontFamily: `'Glory', sans-serif`,
            color: '#cacaca',
            lineHeight: 1
        }
    },
    text:
    {
        '&&': {
            fontFamily: `'Glory', sans-serif`,
            lineHeight: 1,
        }
    },
    paragraph:
    {
        '&&': {
            fontFamily: `'Glory', sans-serif`,
            lineHeight: 1.2,
            fontSize: 22
        }
    },
    divider:
    {
        '&&': {
            width: '50%',
            backgroundColor: '#7c7c7c',
            margin: '10px 0 0'
        }
    },
    website:
    {
        '&&': {
            fontFamily: `'Glory', sans-serif`,
            backgroundColor: '#3498db',
            color: 'white',
            textTransform: 'capitalize',
            margin: '10px 0',
            fontSize: 17,
            height: 40,
            letterSpacing: 1,
            borderRadius: 5,
            '&:hover': { backgroundColor: '#3498dbCC' },
        }
    },
    button:
    {
        color: 'white',
        fontSize: 17,
        height: 40,
        borderRadius: 5
    },
    avatar:
    {
        backgroundColor: blueGrey[500],
        color: 'white',
        width: 48,
        height: 48,
    },
    ml20:
    {
        marginLeft: 20
    }
});
