import React from 'react'
import Button from '@material-ui/core/Button'
import { Query } from 'react-apollo'
import  { gql } from 'apollo-boost'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

export default function StoryNavigation(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChoose = param => e => {
    setAnchorEl(null);
    window.location="/drafts/"+param;
  };

  return (
    <div>
      <Button color="inherit"
        aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}
        title="Drafts"
      >
        Povestile Mele
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
      <Query query={MY_STORIES_QUERY}>
        {({ data, loading, error, refetch }) => {
          if (loading) {
            return (
              <div/>
            )
          }
    
          if (error) {
            return (
              <div/>
            )
          }

          return (
            <div>
              {data.me &&
              data.me.stories.map(story =>
                <MenuItem onClick={handleChoose(story.id)}>{story.title}</MenuItem>
              )
              } 
              </div> 
          )
        }}
      </Query>
      </Menu>
    </div>
  );
}

export const MY_STORIES_QUERY = gql`
  query MyStoriesQuery {
    me {
      id
      email
      name
      stories{
        id
        title
      }
    }
  }
`
