import React from 'react'

import Typography from '@material-ui/core/Typography'

import { useDrag } from 'react-dnd'

import { useStyles } from '../constants/styles'
import { ItemTypes } from '../constants/ItemTypes'


export default function FrameDrag(props)  {
  const classes = useStyles()

  const [{isDragging}, drag] = useDrag({
    item: { id:props.frame.id, position:props.frame.position, title:props.frame.title, type: ItemTypes.FRAME },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
    },
		collect: monitor => ({
			isDragging: !!monitor.isDragging(),
		}),
  })

  return (
    <div ref={drag}>
    <Typography className={classes.title}>{props.frame.title}</Typography>
    </div>
    )
}
