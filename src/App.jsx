
import { BrowserRouter,Navigate,Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from './pages/About'
import Contact from './pages/Contact'
import ProjectsPages from "./pages/ProjectsPages"
import Skills from "./pages/Skills"
import PlaceholderPage from "./pages/PlaceholderPage"
import Blogs from './pages/Blogs'

import Layout from './components/layout/Layout'

function NotFound(){
  return(
    <PlaceholderPage
      title="Page not found"
      desc="존재하지 않는 페이지 입니다."
    />
  )
}


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="projects" element={<ProjectsPages/>}/>
          <Route path="skills" element={<Skills/>}/>
          <Route path="blogs" element={<Blogs/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="privacy" element={<PlaceholderPage title="Privacy"/>}/>
          <Route path="terms" element={<PlaceholderPage title="Terms"/>}/>
          <Route path="blogs" element={<Blogs/>}/>
          <Route path="404" element={<NotFound/>}/>
          <Route path="*" element={<Navigate to="/404" replace/>}/>

        </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App
