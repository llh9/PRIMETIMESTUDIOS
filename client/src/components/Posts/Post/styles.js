import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'transparent',
    backgroundBlendMode: 'darken',
    zIndex: 0,
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    borderColor: 'red',
    borderStyle: 'solid',
    height: '100%',
    position: 'relative',
    backgroundColor: 'transparent',
    zIndex: 1,
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
    backgroundColor: 'rgba(128, 128, 128, 0.648)',
    zIndex: 2,

  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
    backgroundColor: 'rgba(128, 128, 128, 0.648)',
    
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
    color: "white",
  },
  title: {
    padding: '0 16px',
    borderRadius: 5,
    color: 'white',
    backgroundColor: 'black',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
    color: 'white',
    zIndex: 1,
  },
  cardAction: {
    display: 'block',
    textAlign: 'initial',
    color: 'white',
    zIndex: 1,
  },
  likes: {
    color: 'white',
  }
});