import React from 'react'
import { Query } from 'react-apollo'
import  { gql } from 'apollo-boost'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'

import { useStyles } from '../constants/styles'
import ErrorPage from './ErrorPage'
import Loader from './Loader'
import CreateUser from './CreateUser'
import CreateStory from './CreateStory'

export default function FeedPage(props) {
const classes = useStyles();

const handleChoose = param => e => {
  window.location="/drafts/"+param;
};

    return (
      <Query query={FEED_QUERY}>
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
              <Typography gutterBottom variant="h4" component="h2" className={classes.titlePage}>Povestile mele sunt:(Acest text va trebui inlocuit cu un text de prezentare)</Typography>
              <List component="nav" className={classes.listStories} aria-label="mailbox folders">
              {data.me &&
                data.me.stories.map(story =>
                  <div>
                  <ListItem button onClick={handleChoose(story.id)}>
                    <ListItemText primary={story.title} className={classes.titleFrame}/>
                  </ListItem>
                  <Divider />
                  </div>
              )
              } 
              </List>
              {data.me && data.me.stories.length===0 &&
              <CreateStory position={"0"}/>}
              {!data.me &&
                <CreateUser
                  email={props.match.params.email}
                  />
              }
            </div>
          )
        }}
      </Query>
    )
}

export const FEED_QUERY = gql`
  query FeedQuery {
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
      }
    }
  }
`
