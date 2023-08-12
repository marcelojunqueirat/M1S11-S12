import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import { NotFound } from '../pages/NotFound'
import { AboutMe } from '../pages/AboutMe'

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export { RoutesApp }