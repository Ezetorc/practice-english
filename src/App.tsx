import { Suspense } from 'react'
import { Header } from './components/Header'
import { Route, HashRouter as Router, Routes } from 'react-router'
import Home from './components/Home'
import ThemeTheory from './components/ThemeTheory'
import { themes } from './constants/themes'

function App () {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          {themes.map(theme => (
            <Route
              key={theme.path}
              path={theme.path}
              element={<ThemeTheory theme={theme} />}
            />
          ))}
        </Routes>
      </Router>
    </Suspense>
  )
}

export default App
