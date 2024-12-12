import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { HashRouter as Router } from 'react-router'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<span>Loading...</span>}>
      <Router>
        <main className='viewport-advice hidden text-[clamp(20px,4vw,30px)] flex-col text-center p-[5%]'>
          <span>Rotate your phone to continue.</span>
          <span>Rotá tu celular para continuar.</span>
        </main>
        <App />
      </Router>
    </Suspense>
  </StrictMode>
)
