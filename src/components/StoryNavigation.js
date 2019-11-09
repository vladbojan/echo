import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Story from './Story'
import Frame from './Frame'
import AddFrame from './AddFrame'
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


export default function StoryNavigation(props) {
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
        <Tab label="Poveste" {...a11yProps(0)} className={classes.tab}/>
        <Tab label="mele Povestile" {...a11yProps(1)} className={classes.tab}/>
      </Tabs>
      <TabPanel value={value} index={0}>
      </TabPanel>
      <TabPanel value={value} index={1}>
        {props.stories.map(story =>
            <Story
              key={story.id}
              story={story}
              refresh={props.refresh}
              isDraft={!story.published}
              edit={false}
            />
        )
        }
      </TabPanel>
    </div>
  );
}
