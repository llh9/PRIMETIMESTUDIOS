
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      backgroundImage: "url('../images/ms-cs-bg.png')",
    },
  },
  paper: {
    padding: theme.spacing(2),
    borderRadius: 15,
    borderColor: 'red',
    borderStyle: 'solid',
    backgroundColor: 'gray',
  },
  themedText: {
    borderRadius: '5px',
    backgroundColor: 'white',
  },
  heading: {
    color: 'white',
    borderRadius: 15,
    borderColor: 'red',
    borderStyle: 'solid',
    marginBottom: '1rem',
    display: 'flex',
    padding: '16px',
    backgroundColor: 'black',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
    backgroundColor: 'red',
  },
  buttonClear: {
    marginBottom: 10,
    backgroundColor: 'black',
  },
}));