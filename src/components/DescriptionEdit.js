import React  from 'react'
import Button from '@material-ui/core/Button'
import EditIcon from '@material-ui/icons/Edit'
import IconButton from '@material-ui/core/IconButton'

import { Mutation } from 'react-apollo'
import  { gql } from 'apollo-boost'
import { useStyles } from '../constants/styles'
import TextEditor from './TextEditor'



export default function DescriptionEdit(props)  {
  const classes = useStyles()
  const [id, setId] = React.useState(props.id)
  const [name, setName] = React.useState(props.content)
  const [theme, setTheme] = React.useState('bubble')
  const [readOnly, setReadOnly] = React.useState(true)

  const handleSetContent = (value) =>{
    setName(value)
  }

  const handleSetEdit = () =>{
    theme==='snow'?setTheme('bubble'):setTheme('snow')
    readOnly===true?setReadOnly(false):setReadOnly(true)
  }

  return (
        <Mutation
        mutation={EDIT_DESCRIPTION_MUTATION}
      >
        {(updateUser, { data, loading, error }) => {
          return (
              <form
                className="w-100"
                onSubmit={async e => {
                  e.preventDefault()
                  await updateUser({
                    variables: { id, name },
                  })
                  props.refresh()
                  setTheme('bubble')
                  setReadOnly(true)
                }}
              >   
                <IconButton className={classes.iconButtonParagraph} size="small" aria-label="edit" onClick={e => handleSetEdit()}>
                  <EditIcon />
                </IconButton>       
                <TextEditor content={name}  class={readOnly?'':classes.paragraphEdit} setContent={handleSetContent} theme={theme} readOnly={readOnly}/>
                <Button size="small" className={theme==='snow'?classes.actionButton:classes.hidden} disabled={!name} type="submit">
                  Salveaza
                </Button>

              </form>
          )
        }}
      </Mutation> 
    )
}

const EDIT_DESCRIPTION_MUTATION = gql`
  mutation EditDescriptionMutation($id: ID!, $name: String!) {
    updateUser(id: $id, name: $name) {
      id
      name
    }
  }
`
