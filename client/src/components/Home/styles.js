import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 15,
    borderColor: 'red',
    borderStyle: 'solid',
    marginBottom: '1rem',
    display: 'flex',
    padding: '16px',
    backgroundColor: 'rgba(128, 128, 128, 0.648)',
  },
  searchText: {
    borderRadius: '5px',
    backgroundColor: 'white',
  },
  pagination: {
    borderRadius: 4,
    borderColor: 'red',
    borderStyle: 'solid',
    backgroundColor: 'white',
    marginTop: '1rem',
    padding: '16px',
  },
  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
}));