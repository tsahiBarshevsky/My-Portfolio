import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    text:
    {
        '&&': {
            fontFamily: `'Glory', sasn-serif`,
            zIndex: 1
        }
    },
    title:
    {
        '&&': {
            fontSize: 250,
            marginBottom: -20,
            background: 'linear-gradient(to top, #fff, #fff, #3498db, #3498db)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            '@media (max-width: 600px)':
            {
                fontSize: 200
            }
        }
    },
    subtitle:
    {
        '&&': {
            fontSize: 30
        }
    },
    button:
    {
        '&&': {
            color: 'white',
            backgroundColor: 'transparent',
            border: '2px solid white',
            textTransform: 'capitalize',
            borderRadius: 50,
            width: 150,
            height: 42,
            fontSize: 18,
            marginTop: 25,
            zIndex: 1,
            fontWeight: 600,
            letterSpacing: 1.2,
            transition: 'all 0.25s ease-in-out',
            '&:hover':
            {
                color: 'black',
                backgroundColor: 'white',
            }
        }
    }
});
