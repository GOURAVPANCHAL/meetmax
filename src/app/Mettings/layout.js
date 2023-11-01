'use client'
import React from 'react'
import Side from './dashboard/page'

const layout = ({children})=> {
  return (
    <>
    <Side />
    {children}
    </>
  )
}

export default layout