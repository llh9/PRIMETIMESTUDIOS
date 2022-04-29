import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    backgroundColor: 'transparent',
    borderRadius: 15,
    borderColor: "red",
    borderStyle: 'solid',
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      // borderStyle: 'none',
    },
  },
  heading: {
    // color: theme.palette.primary.main,
    color: 'white',
    // textDecoration: 'none',
    fontSize: '2em',
    fontWeight: 300,
  },
  header: {
    backgroundColor: 'transparent',
    borderRadius: 15,
    borderColor: "white",
    borderStyle: 'solid',
    margin: '15px 0px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5px 25px',
    fontWeight: 'lighter',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  image: {
    // marginLeft: '10px',
    marginTop: '5px',
    borderRadius: 15,
    borderColor: "red",
    borderStyle: 'solid',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
    borderRadius: 15,
    borderColor: "white",
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      marginTop: 20,
      justifyContent: 'center',
    },
  },
  logout: {
    marginLeft: '20px',
    backgroundColor: 'red',
  },
  userName: {
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 15,
    borderColor: "white",
    borderStyle: 'solid',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    // backgroundColor: deepPurple[500],
    backgroundColor:'red',
  },
}));