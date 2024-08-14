import './App.css'
import { RandomUser, RandomJokesPage, CatsListingPage } from './pages'
import { Route, Routes, Navigate } from "react-router-dom"

function App() {
  return (
    <div className='min-w-screen min-h-screen h-full w-full'>

      <Routes>
        <Route path="/" element={<Navigate to="/random-user" />} />
        <Route path="/random-user" element={<RandomUser />} />
        <Route path="/random-jokes" element={<RandomJokesPage />} />
        <Route path="/cats-listing" element={<CatsListingPage />} />
      </Routes> 
    </div>
  )
}

export default App
