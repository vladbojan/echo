import React from 'react'

import Typography from '@material-ui/core/Typography'

import { useDrag } from 'react-dnd'

import { useStyles } from '../constants/styles'
import { ItemTypes } from '../constants/ItemTypes'


export default function SceneDrag(props)  {
  const classes = useStyles()

  const [{isDragging}, drag] = useDrag({
    item: { id:props.scene.id, position:props.scene.position, title:props.scene.title, type: ItemTypes.SCENE },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
    },
		collect: monitor => ({
			isDragging: !!monitor.isDragging(),
		}),
  })

  return (
    <div ref={drag}>
    <Typography className={classes.title}>{props.scene.title}</Typography>
    </div>
    )
}
