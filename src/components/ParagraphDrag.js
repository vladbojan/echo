import React, { useRef }  from 'react'

import { useDrag } from 'react-dnd'

import CardActions from '@material-ui/core/CardActions'
import EditIcon from '@material-ui/icons/Edit'
import IconButton from '@material-ui/core/IconButton'

import ParagraphEdit from './ParagraphEdit'
import DeleteParagraph from './DeleteParagraph'
import { useStyles } from '../constants/styles'
import { ItemTypes } from '../constants/ItemTypes'


export default function ParagraphDrag(props)  {
  const classes = useStyles()
  const [id, setId] = React.useState(props.id)
  const [content, setContent] = React.useState(props.paragraph.content)
  const [position, setPosition] = React.useState(props.position)
  const [theme, setTheme] = React.useState('bubble')
  const [readOnly, setReadOnly] = React.useState(true)

  const handleSetEdit = () =>{
    theme==='snow'?setTheme('bubble'):setTheme('snow')
    readOnly===true?setReadOnly(false):setReadOnly(true)
  }

  const [{isDragging}, drag] = useDrag({
    item: { id:id, position:position, content: content, type: ItemTypes.PARAGRAPH },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
    },
		collect: monitor => ({
			isDragging: !!monitor.isDragging(),
		}),
  })

  return (
    <div>
    {readOnly &&
    <div ref={drag}>
    <CardActions>
      <ParagraphEdit
                key= {props.id}
                id= {props.id}
                paragraph= {props.paragraph}
                show= {props.id}
                position = {props.position}
                refresh={props.refresh}
                readOnly={readOnly}
                theme={theme}
              />
      <IconButton className={classes.iconButtonParagraph} size="small" aria-label="edit" onClick={e => handleSetEdit()}>
        <EditIcon />
      </IconButton>
      <DeleteParagraph 
        id={props.id} 
        refresh={props.refresh}
      />
    </CardActions> 
    </div>
    }
    {!readOnly &&
      <CardActions>
        <ParagraphEdit
                key= {props.id}
                id= {props.id}
                paragraph= {props.paragraph}
                show= {props.id}
                position = {props.position}
                refresh={props.refresh}
                readOnly={readOnly}
                theme={theme}
              />
        <IconButton className={classes.iconButtonParagraph} size="small" aria-label="edit" onClick={e => handleSetEdit()}>
          <EditIcon />
        </IconButton>
        <DeleteParagraph 
          id={props.id} 
          refresh={props.refresh}
        />
      </CardActions> 
      }
      </div>
    )
}
