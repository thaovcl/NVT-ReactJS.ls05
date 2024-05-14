import React from 'react'
import NVTUseState from './components/NVTUseState'
import NVTUseEffect from './components/NVTUseEffect'
import NVTUseContext from './components/NVTUseContext'


export default function 
() {
  return (
    <div className='container boder mt-3'>
      <h1 className='text-center'>Nguyễn Văn Thạo - Hook </h1>
      <hr/>
      <NVTUseState/>
      <hr/>
      <NVTUseEffect/>
      <hr/>
      <NVTUseContext/>
    </div>
  )
}
