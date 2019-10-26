import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Story from './Story'
import Frame from './Frame'
import AddIcon from '@material-ui/icons/Add'
import IconButton from '@material-ui/core/IconButton'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {children}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    maxHeight: 900, 
    overflow: 'auto',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    minWidth: '50px!important',
  },
  tab: {
    minWidth: 50,
    margin: '12px 0px!important',
  },
  panelRoot: {
    width: 51,
  },
  margin: {
    margin: theme.spacing(1),
  },
}));


export default function StoryOverview(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [hidePanel, setHidePanel] = React.useState(false);

  const handleChange = (event, newValue) => {
    if (newValue===2){
      setHidePanel(true)
    } else {
      setHidePanel(false)
    }
    setValue(newValue);
  };

  return (
    <div className={hidePanel?classes.panelRoot:classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Scena" {...a11yProps(0)} className={classes.tab}/>
        <Tab label="Poveste" {...a11yProps(1)} className={classes.tab}/>
        <Tab label="Ascunde" {...a11yProps(2)} className={classes.tab}/>
      </Tabs>
      <TabPanel value={value} index={0}>
        <div>
          <h2>
          {props.scene.title}
          </h2>
          {props.scene.frames.map(frame=>
            <div>
              <Frame
                key={frame.id}
                frame={frame}
                refresh={props.refresh}
                isDraft={!frame.published}
                edit={true}
              />
              <IconButton color="secondary" aria-label="adauga cadru" size="large" className={classes.margin}>
                <AddIcon />
              </IconButton>
            </div>
          )}
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Story
          key={props.story.id}
          story={props.story}
          refresh={props.refresh}
          isDraft={!props.story.published}
          edit={true}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
      </TabPanel>
    </div>
  );
}
