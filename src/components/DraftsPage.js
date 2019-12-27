import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Story from './Story'
import ErrorPage from './ErrorPage'
import Loader from './Loader'
import { Query } from 'react-apollo'
import  { gql } from 'apollo-boost'

const useStyles = makeStyles(theme => ({
  home: {
    paddingLeft: 100,
  },
}));

export default function DraftsPage(props) {
const classes = useStyles();
const [showStory, setShowStory] = React.useState(props.match.params.id);
  
return (
  <Query query={DRAFTS_QUERY}>
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
      <div className={classes.home}>
        {data.me &&
          data.me.stories.map(story =>
          (showStory===story.id)?
          <Story
            key={story.id}
            story={story}
            refresh={() => refetch()}
            isDraft={!story.published}
            show={showStory}
          />:(data.me.stories[0].id===story.id)&&(showStory===0)&&
          <Story
            key={story.id}
            story={story}
            refresh={() => refetch()}
            isDraft={!story.published}
            show={story.id}
          />
        )
        } 
      </div>
    )
  }}
</Query>
)
}

export const DRAFTS_QUERY = gql`
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
        scenes{
          id
          title
          frames{
            id
            title
            paragraphs{
              id
              content
            }
          }
        }
      }
    }
  }
`
