import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
  hide: {
    display:'none',
  },
  flex: {
    display: "flex",
  },
  formButton: {
    maxWidth: 100,
    maxHeight: 100,
  },
  home: {
    paddingTop: 100,
  },
  homeEdit: {
    extend: 'home',
    paddingLeft: 100,
    paddingRight: 100,
  },
  card: {
    maxWidth: '100%',
  },
  media: {
    display: "flex",
  },
  cardContainer: {
    maxWidth: '99%',
    marginBottom: 50,
  },
  header: {
    flexGrow:1,
    display: "flex",
    height: 72,
    marginTop: 30,
    color: '#b4916b',
  },
  title: {
    minWidth: 250,
    marginTop: 14,
    paddingLeft: 24,
    fontSize: '1.1rem',
  },
  cardEdit: {
    minWidth: 500,
  },
  paragraph: {
    whiteSpace: "pre-wrap",
  },
  cardContent: {
    backgroundColor: '#f6ffff',
    color: '#1e326a',
  },
  appBar: {
    backgroundColor: '#1e326a',
  },
  appBarTitle: {
    flexGrow: 1,
  },
  root: {
    flexGrow: 1,
    display: 'flex',
    maxHeight: 900, 
    overflow: 'auto',
  },
  tabs: {
    borderRight: `1px solid`,
    minWidth: '50px!important',
    margin: '0px!important',
  },
  tab: {
    minWidth: '50px!important',
    margin: '12px 0px!important',
  },
  tabPanel: {
    width: '100%',
  },
  panelRoot: {
    width: 51,
  },
}));
