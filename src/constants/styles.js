import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
  addPanel: {
    minWidth: '95%',
    top: '-1em',
    position: 'relative',
  },
  addPanelExpanded: {
    minWidth: '95%',
    borderTop: 'solid 1px black',
  },
  addPanelButton: {
    color: '#4c586f!important',
    backgroundColor: '#d7edff!important',
    marginLeft: '45%!important',
    marginTop: '0.5em',
  },
  iconButton: {
    color: '#4c586f!important',
    backgroundColor: '#d7edff!important',
  },
  iconButtonParagraph: {
    extend: 'margin',
    color: '#4c586f!important',
  },
  expansionPanelMinimized: {
    maxHeight: '6em',
    marginTop: '1em',
  },
  expansionPanelMaximized: {
    backgroundColor:'#E2E7EA!important',
    marginTop: '2em',
  },
  hide: {
    display:'none',
  },
  flex: {
    display: 'flex',
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
    backgroundColor: '#4c586f',
    minHeight: '6em',
  },
  header: {
    flexGrow:1,
    color: '#ffffff',
  },
  title: {
    paddingLeft: '1em',
    fontSize: '1.1rem',
  },
  titleFrame: {
    paddingLeft: '1em',
    fontSize: '1.1rem',
    paddingTop: '1.2em',
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
  editPanel: {
    minWidth: '50%!important',
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
    minHeight: '5em',
    '&$expanded': {
      minHeight: '5em',
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