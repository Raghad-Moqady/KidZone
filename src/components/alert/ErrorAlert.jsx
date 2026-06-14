import { Alert } from '@mui/material'
import React from 'react'

export default function ErrorAlert({message}) {
  return (
    <>
    <Alert   severity="error" sx={{margin:'auto',width:'80%',backgroundColor:'#d51c1c64',my:4 ,display:'flex',justifyContent:'center'}}>{message}</Alert>
    </>
  )
}
