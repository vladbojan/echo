import React from 'react'
import PropTypes from 'prop-types'
import { useStyles } from '../constants/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import SceneEdit from './SceneEdit'
import StoryEdit from './StoryEdit'
import MyStoriesEdit from './MyStoriesEdit'

const { getPosition } = require('./utils')

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

export default function StoryOverview(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [hidePanel, setHidePanel] = React.useState(true);

  const handleChange = (event, newValue) => {
    if (newValue===0){
      setHidePanel(true)
      props.handleChangeSizes(1)
    } else {
      setHidePanel(false)
      props.handleChangeSizes(4)
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
        <Tab label="Cadru" {...a11yProps(0)} className={classes.tab}/>
        <Tab label="Scena" {...a11yProps(1)} className={classes.tab}/>
        <Tab label="Poveste" {...a11yProps(2)} className={classes.tab}/>
        <Tab label="mele Povestile" {...a11yProps(3)} className={classes.tab}/>
      </Tabs>
      <TabPanel value={value} index={0}>
      </TabPanel>
      <TabPanel value={value} index={1} className={classes.tabPanel}>
        <div>
          <Typography>{props.scene.title}</Typography>
          <SceneEdit
            scene={props.scene}
            show={props.scene.id}
            refresh={props.refresh}
            edit={true}
          />
        </div>
      </TabPanel>
      <TabPanel value={value} index={2} className={classes.tabPanel}>
        <div>
          <Typography>{props.story.title}</Typography>
          <StoryEdit
            story={props.story}
            show={props.story.id}
            refresh={props.refresh}
            edit={true}
          />
        </div>
      </TabPanel>
      <TabPanel value={value} index={3} className={classes.tabPanel}>
        <MyStoriesEdit
          stories={props.story.author.stories}
          refresh={props.refresh}
          edit={true}
        />
      </TabPanel>
    </div>
  );
}
