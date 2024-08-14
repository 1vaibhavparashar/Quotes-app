import React from 'react'
import { Fragment } from 'react'
import MainNavigation from './pages/mainNavigation/MainNavigation'
import NewQuotes from './pages/NewQuotes'
import AllQuotes from './pages/AllQuotes'
import {Routes , Route} from 'react-router-dom'
import ShowQuotes from './pages/ShowQuotes'



function App() {
  return (
    <Fragment>
      <MainNavigation/>
      <Routes>
        <Route path = "/" element={<AllQuotes/>} />
        <Route path = "/new" element={<NewQuotes/>} />
        <Route path = "/quotes/:id" element={<ShowQuotes/>} />
      </Routes>
    </Fragment>
  )
}


export default App