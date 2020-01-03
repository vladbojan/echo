import React from 'react'

import { Mutation } from 'react-apollo'
import  { gql } from 'apollo-boost'

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import { useStyles } from '../constants/styles'
import headerImage from '../assets/1.jpg'

const CREATE_USER_MUTATION = gql`
  mutation CreateUserMutation($email: String!) {
    createUser(email: $email) {
      id
    }
  }
`

export default function CreateUser(props) {
  const classes = useStyles();

  return (
    <div>
    <Mutation
      mutation={CREATE_USER_MUTATION}
    >
    {(createDraft, { data, loading, error }) => {
      return (
        <div>
          <form
            className="w-100"
            onSubmit={async e => {
              e.preventDefault()
              const email = props.email
              await createDraft({
                variables: { email },
              })
              window.location="/"
            }}
          > 
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={headerImage}
                  title="Test Image"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Vom genera un utilizator nou pentru urmatoarea adresa de mail: {props.email}
                </Typography>
              </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" className={classes.actionButton} disabled={!props.email} type="submit">
                  Genereaza utilizatorul
                </Button>     
              </CardActions>
            </Card>

    
          </form>
        </div>
      )
    }}
  </Mutation>
  </div>
  );
}
