import React from 'react'
import Switch from '@material-ui/core/Switch'
import Paper from '@material-ui/core/Paper'
import Collapse from '@material-ui/core/Collapse'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { useStyles } from '../constants/styles'
import NoteAdd from './NoteAdd'
import NoteEdit from './NoteEdit'
import { Query } from 'react-apollo'
import  { gql } from 'apollo-boost'

const { getPosition } = require('./utils')

export default function NoteContainer() {
  const classes = useStyles()
  const [checked, setChecked] = React.useState(false)
  const [content, setContent] = React.useState('')

  const handleChange = () => {
    setChecked((prev) => !prev);
  }

  const handleSetContent = (value) =>{
    setContent(value)
  }

  return (
    <div>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Notitele mele"
      />
      
      <Query query={NOTES_QUERY}>
      {({ data, loading, error, refetch }) => {
        if (loading) {
          return (
            <div/>
          )
        }



        return (
          <div className={classes.notesContainer}>
            <NoteAdd position={getPosition(data.notes[data.notes.length-1]?data.notes[data.notes.length-1].position:"0")} checked={checked} refresh={refetch}/>
            {data.notes &&
            data.notes.map(note =>
            <NoteEdit position={note.position} id={note.id} content={note.content} checked={checked} refresh={refetch}/>
            )
            } 
        </div> 
        )
      }}
    </Query>
    </div>
  );
}

export const NOTES_QUERY = gql`
  query MyNotesQuery {
    notes {
      id
      content
      position
    }
  }
`
