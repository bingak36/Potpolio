import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import ProjectsPages from "./pages/projects/ProjectsPages"

import PlaceholderPage from "./pages/PlaceholderPage"
import Blog from "./pages/blog/Blog"
import  ThemeProvider from './context/ThemeProvider'
import SkillsPages from "./pages/skills/SkillsPages"

import Layout from './components/layout/Layout'

function NotFound() {
  return (
    <PlaceholderPage
      title="Page not found"
      desc="존재하지 않는 페이지 입니다."
    />
  )
}


function App() {


  return (
    <BrowserRouter>
      <ThemeProvider>

        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<ProjectsPages />} />
            <Route path="skills" element={<SkillsPages />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
            <Route path="privacy" element={<PlaceholderPage title="Privacy" />} />
            <Route path="terms" element={<PlaceholderPage title="Terms" />} />
            <Route path="404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />

          </Route>
        </Routes>
      </ThemeProvider>

    </BrowserRouter>
  )
}

export default App