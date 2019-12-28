import React from 'react'
import StoryEdit from './StoryEdit'
import { Query } from 'react-apollo'
import  { gql } from 'apollo-boost'
import ErrorPage from './ErrorPage'
import Loader from './Loader'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  home: {
    paddingLeft: 100,
    paddingRight: 100,
  },
}));

function  StoryEditPage(props)  {
const classes = useStyles();
return (
  <Query query={STORY_QUERY} variables={{ id: props.match.params.id }}>
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

      const { story } = data
      return (
        <div className={classes.home}>
          <StoryEdit
            story={story}
            show={story.id}
            refresh={() => refetch()}
            edit={true}
          /> 
        </div>
      )
    }}
  </Query>
)
}

export default StoryEditPage;

export const STORY_QUERY = gql`
query StoryQuery($id: ID!) {
  story(id: $id) {
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
`
