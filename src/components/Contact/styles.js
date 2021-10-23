import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    title:
    {
        fontFamily: `'Eurostile', sans-serif`,
        color: '#cacaca',
        textShadow: '1px 2px 1px #000000CC',
        letterSpacing: 1.5,
        lineHeight: 1
    },
    text:
    {
        fontFamily: `'Glory', sans-serif`,
    },
    input:
    {
        backgroundColor: '#2e3445',
        marginBottom: 15,
        borderRadius: 10,
        width: 450,
        '@media (max-width: 550px)':
        {
            width: '100%'
        }
    },
    message: {
        height: 185
    },
    submit:
    {
        backgroundColor: '#3498db',
        textTransform: 'capitalize',
        color: 'white',
        marginTop: 10,
        borderRadius: 10,
        width: 100,
        height: 37,
        fontSize: 18,
        '&:hover':
        {
            backgroundColor: '#3498dbCC'
        }
    },
    placeholder:
    {
        color: 'white',
        "&::placeholder":
        {
            color: "white",
        }
    }
}));