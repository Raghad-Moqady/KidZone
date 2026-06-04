import { Typography } from '@mui/material'
import React from 'react'

export default function SharedTitle({title}) {
  return (
   <>
       <Typography variant='h4' component={"h1"} color={{xs:"#8B5E3C",lg:"white"}}  mt={1}> {title}</Typography>
   </>
  )
}
