import React from 'react'

import { Query } from 'react-apollo'
import  { gql } from 'apollo-boost'

import { useStyles } from '../constants/styles'
import Story from './Story'
import ErrorPage from './ErrorPage'
import Loader from './Loader'

export default function DraftsPage(props) {
const classes = useStyles();
  
return (
  <Query query={DRAFTS_QUERY} variables={{ id: props.match.params.id }}>
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
        {data && data.story &&
          <Story
            story={data.story}
            refresh={() => refetch()}
            isDraft={!data.story.published}
            show={data.story.id}
          />
        } 
      </div>
    )
  }}
</Query>
)
}

export const DRAFTS_QUERY = gql`
  query DraftsQuery($id: ID!) {
    story(id: $id) {
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
          styling
          media
          position
        }
      }
    }
  }
`
