import React from 'react'
import { withRouter } from 'react-router-dom'
import { Query } from 'react-apollo'
import  { gql } from 'apollo-boost'

import Typography from '@material-ui/core/Typography'
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel'
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import { withStyles } from '@material-ui/core/styles'

import MyStoriesEdit from './MyStoriesEdit'
import ErrorPage from './ErrorPage'
import Loader from './Loader'
import StoryEdit from './StoryEdit'
import StoryTitleEdit from './StoryTitleEdit'
import DeleteStory from './DeleteStory'

import { useStyles } from '../constants/styles'
import { panelSummaryStyle } from '../constants/styles'
import { panelDetailStyle } from '../constants/styles'
import { panelStyle } from '../constants/styles'

const ExpansionPanel = withStyles(panelStyle)(MuiExpansionPanel);
const ExpansionPanelSummary = withStyles(panelSummaryStyle)(MuiExpansionPanelSummary);
const ExpansionPanelDetails = withStyles(panelDetailStyle)(MuiExpansionPanelDetails);

export default function MyStoriesNavigation(props) {
  const classes  = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Query query={MY_STORIES_QUERY}>
    {({ data, loading, error, refetch }) => {
      if (loading) {
        return (
          <Loader/>
        )
      }

      if (error) {
        return (
          <ErrorPage/>
        )
      }

      return (
        <div className={classes.homeEdit}>
        {data.me &&
          data.me.stories.map((story, index)=>
          <div className={(expanded===index)?classes.expansionPanelMaximized:classes.expansionPanelMinimized}>
              <ExpansionPanel square expanded={expanded === index}>
                <ExpansionPanelSummary>
                  <div className={classes.header} onClick={e => expanded===index? setExpanded(false):setExpanded(index)}>
                    <Typography className={classes.title}>{story.title}</Typography>
                  </div>
                  {expanded===index&&
                  <StoryTitleEdit 
                    id={story.id} 
                    title={story.title}
                    styling={story.styling}
                    media={story.media}
                    position={story.position}
                    refresh={() => refetch()}
                    showPanel={false}
                  />
                  }
                  <DeleteStory 
                    id={story.id} 
                    refresh={() => refetch()}
                  />
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <StoryEdit
                    story={story}
                    show={story.id}
                    refresh={() => refetch()}
                    edit={true}
                  />
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </div>
          )}       
        </div>
      )
    }}
  </Query>
  )
}

const MY_STORIES_QUERY = gql`
query DraftsQuery {
  me {
    id
    email
    name
    stories{
      id
      title
      styling
      media
      position
      scenes{
        id
        title
        styling
        media
        position
        frames{
          id
          title
          styling
          media
          position
          paragraphs{
            id
            content
            styling
            media
            position
          }
        }
      }
    }
  }
}
`

