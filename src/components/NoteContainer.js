import React from 'react'
import Switch from '@material-ui/core/Switch'
import Paper from '@material-ui/core/Paper'
import Collapse from '@material-ui/core/Collapse'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField'
import { useStyles } from '../constants/styles'
import NoteAdd from './NoteAdd'
import NoteEdit from './NoteEdit'
import NoteSearch from './NoteSearch'
import { Query } from 'react-apollo'
import  { gql } from 'apollo-boost'

const { getPosition } = require('./utils')

export default function NoteContainer() {
  const classes = useStyles()
  const [checked, setChecked] = React.useState(false)
  const [searchField, setSearchField] = React.useState('')

  const handleChange = () => {
    setChecked((prev) => !prev)
    setSearchField('')
  }


  return (
    <div>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Notitele mele"
      />
      <TextField
        value={searchField}
        onChange={e => setSearchField(e.target.value)}
        margin="normal"
        placeholder="Cauta in notite"
        style={checked?{ display: 'block' }:{ display: 'none' }}
      />

      {(searchField!=='')&&(searchField.length>2)&& <NoteSearch  checked={true} searchString={searchField}/>}

      
      <Query query={NOTES_QUERY}>
      {({ data, loading, error, refetch }) => {
        if (loading) {
          return (
            <div/>
          )
        }



        return (
          <div className={classes.notesContainer}>
            {data && data.notes &&
            <NoteAdd position={getPosition(data.notes[data.notes.length-1]?data.notes[data.notes.length-1].position:"0")} checked={checked} refresh={refetch}/>
            }
            {!data.notes &&
            <NoteAdd position={getPosition("0")} checked={checked} refresh={refetch}/>
            }
            {data && data.notes &&
            data.notes.map(note =>
            <NoteEdit key= {note.id} position={note.position} id={note.id} content={note.content} checked={checked} refresh={refetch}/>
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
