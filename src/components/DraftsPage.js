import React from 'react'
import Story from './Story'
import ErrorPage from './ErrorPage'
import Loader from './Loader'
import { Query } from 'react-apollo'
import  { gql } from 'apollo-boost'
import Grid from '@material-ui/core/Grid'
import StoryNavigation from './StoryNavigation'

export default function CreatePage(props) {
    const [sizeNav, setSizeNav] = React.useState(1);
    const [sizePanel, setSizePanel] = React.useState(11);
  
    const handleChangeSizes = (newValue) => {
      if (newValue===1){
        setSizeNav(1)
        setSizePanel(11)
      } else {
        setSizeNav(4)
        setSizePanel(8)
      }
    };
  
  
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
          <Grid container spacing={3}>
            <Grid item xs={12} sm={sizeNav}>
            {data.me &&
             data.me.stories &&
              <StoryNavigation
                key={data.me.id}
                stories={data.me.stories}
                refresh={() => refetch()}
                handleChangeSizes={handleChangeSizes}
              />
            }
            </Grid>
            <Grid item xs={12} sm={sizePanel}>
            {data.me &&
             data.me.stories.map(story =>
              <Story
                key={story.id}
                story={story}
                refresh={() => refetch()}
                isDraft={!story.published}
              />
            )
            }
            </Grid>
          </Grid>   
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
