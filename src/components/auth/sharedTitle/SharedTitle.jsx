import { Typography } from '@mui/material'
import React from 'react'

export default function SharedTitle({title}) {
  return (
   <>
      <Typography variant='h4' component={"h1"} >{title}</Typography>
   </>
  )
}
