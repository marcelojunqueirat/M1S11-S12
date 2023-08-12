import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import { NotFound } from '../pages/NotFound'
import { AboutMe } from '../pages/AboutMe'
import { Portfolio } from '../pages/Portfolio'

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export { RoutesApp }