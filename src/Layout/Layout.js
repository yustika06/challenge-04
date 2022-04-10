import React from 'react'
import { Routers } from '../../src/Routes/Routers'
import { BrowserRouter} from 'react-router-dom'

export const Layout = () => {
  return (
    <div>
        <BrowserRouter>
          <Routers/>
        </BrowserRouter>        
    </div>
  )
}
