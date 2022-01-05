import { useContext, useState } from 'react'
import { Context } from '../store'
import Template from './Template'

const Resume = () => {
  const { state } = useContext(Context)

  return (
    <div className="w-[800px] min-h-[100%] shadow-2xl">
      <Template name={state.template} />
    </div>
  )
}

export default Resume
