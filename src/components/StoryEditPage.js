import React from 'react'
import StoryEdit from './StoryEdit'
import { Query } from 'react-apollo'
import  { gql } from 'apollo-boost'
import ErrorPage from './ErrorPage'
import Loader from './Loader'
import { useStyles } from '../constants/styles'

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
        <div className={classes.homeEdit}>
          <h1 className={classes.titleLarge}>{story.title}</h1>
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
        styling
        media
        position
      }
    }
  }
}
`
