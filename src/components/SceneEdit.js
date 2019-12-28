import React from 'react'
import Typography from '@material-ui/core/Typography'
import AddFrame from './AddFrame'
import DeleteFrame from './DeleteFrame'
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const { getPosition } = require('./utils')

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
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
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    display: 'block',
  },
}))(MuiExpansionPanelDetails);

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 1545,
  },
  cardContainer: {
    maxWidth: 1545,
    marginBottom: 50,
  },
  media: {
    height: 140,
    display: "flex",
  },
  header: {
    minWidth: "50%",
    display: "flex",
    height: 72,
    marginTop: 30,
    backgroundColor: "white",
    opacity: 0.6,
  },
  title: {
    minWidth: 250,
    marginTop: 14,
  },
  cardEdit: {
    minWidth: 500,
  },
  hide: {
    display:"none",
  },
  deleteForm: {
    display: "flex",
  },
  paragraph: {
    whiteSpace: "pre-wrap",
  }
}));

function  SceneEdit(props)  {
  const classes  = useStyles();
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

    return (
      <div>
      {props.scene.frames.map((frame, index, allFrames) =>
          <ExpansionPanel square expanded={expanded === index} onChange={handleChange(index)}>
            <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
              <Typography>{frame.title}</Typography>
              <DeleteFrame 
                id={frame.id} 
                refresh={props.refresh}
              />
              {allFrames[index+1] &&
              <AddFrame 
                scene={props.scene} 
                refresh={props.refresh}
                position={frame.position+"-"+allFrames[index+1].position}
              />
              }
              {(!allFrames[index+1]) && (props.show===props.scene.id) &&
                <AddFrame 
                  scene={props.scene} 
                  refresh={props.refresh}
                  position={getPosition(props.scene.frames[props.scene.frames.length-1]?props.scene.frames[props.scene.frames.length-1].position:"0")}
                />
              }
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Card className={props.edit?classes.cardEdit:classes.cardContainer}>
                  <CardContent className={props.edit?classes.cardEdit:classes.card}>
                  {frame.paragraphs.map(paragraph=>
                    <Typography paragraph className={classes.paragraph}> 
                    {paragraph.content}  
                    </Typography>
                  )}
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary"  visibility="hidden" className={classes.button}>
                    Share
                  </Button>
                  <Button size="small" color="primary" href={"/create/"+frame.id}>
                    Editeaza
                  </Button>      
                </CardActions>
              </Card>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          )}      
      </div>
      )
}

export default SceneEdit;
