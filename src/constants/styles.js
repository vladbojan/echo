import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
  iconButton: {
    extend: 'margin',
    color: '#d7edff!important',
  },
  iconButtonParagraph: {
    extend: 'margin',
    color: '#4c586f!important',
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
  header: {
    flexGrow:1,
    display: "flex",
    paddingTop: 10,
    color: '#ffffff',
  },
  title: {
    minWidth: 250,
    marginTop: 14,
    paddingLeft: 24,
    fontSize: '1.1rem',
  },
  paragraph: {
    whiteSpace: "pre-wrap",
  },
  paragraphEdit: {
    whiteSpace: "pre-wrap",
    width: '100%',
    borderRadius: 4,
    backgroundColor: '#ebf6ff',
    color: '#4c586f',
    padding: '0.5rem',

  },
  cardEdit: {
    minWidth: 500,
  },
  cardContainer: {
    maxWidth: '99%',
    marginBottom: 50,
  },
  cardRoot: {
    border: '1px solid #35434e',
  },
  cardContent: {
    backgroundColor: '#ffffff',
    color: '#4c586f',
  },
  appBar: {
    backgroundColor: '#35434e',
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
  actionButton:{
    color:'#4c586f!important',
    fontWeight: '600!important',
    '&:disabled': {
      color:'#d7edff!important',
    },
  },
}));

export const panelSummaryStyle={
  root: {
    backgroundColor: '#4c586f',
    borderBottom: '1px solid #35434e',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
    paddingLeft: 0,
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
    margin: 0,
  },
  expanded: {},
}

export const panelDetailStyle={
  root: {
    display: 'block',
    backgroundColor:'#E2E7EA',
  },
}

export const panelStyle={
  root: {
    border: '1px solid #35434e',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
}