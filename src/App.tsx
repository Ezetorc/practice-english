import { Header } from './components/Header'
import { Route, Routes } from 'react-router'
import Home from './components/Home'
import { themes } from './constants/themes'
import TheoryDisplay from './components/TheoryDisplay'
import ExercisesDisplay from './components/ExercisesDisplay'
import React from 'react'
import Completed from './components/Completed'

const LazyVerbsListDisplay = React.lazy(
  () => import('./components/VerbsListDisplay.tsx')
)

function App () {
  return (
    <div className='content'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/verbs-list' element={<LazyVerbsListDisplay />} />

        {themes.map((theme, index) => (
          <React.Fragment key={index}>
            <Route
              path={`${theme.path}/theory`}
              element={<TheoryDisplay theme={theme} />}
            />

            <Route
              path={`${theme.path}/exercises`}
              element={<ExercisesDisplay theme={theme} />}
            />

            <Route
              path={`${theme.path}/completed`}
              element={<Completed theme={theme} />}
            />
          </React.Fragment>
        ))}
      </Routes>
    </div>
  )
}

export default App
