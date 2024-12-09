import { Suspense } from 'react'
import { Header } from './components/Header'
import { Route, HashRouter as Router, Routes } from 'react-router'
import Home from './components/Home'
import { themes } from './constants/themes'
import TheoryDisplay from './components/TheoryDisplay'
import ExercisesDisplay from './components/ExercisesDisplay'
import React from 'react'
import Completed from './components/Completed'

function App () {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          {themes.map((theme, index) => (
            <React.Fragment key={index}>
              <Route
                path={theme.paths.theory}
                element={<TheoryDisplay theme={theme} />}
              />

              <Route
                path={theme.paths.exercises}
                element={<ExercisesDisplay theme={theme} />}
              />

              <Route
                path={theme.paths.completed}
                element={<Completed theme={theme} />}
              />
            </React.Fragment>
          ))}
        </Routes>
      </Router>
    </Suspense>
  )
}

export default App
