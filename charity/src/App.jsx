import { createBrowserRouter, createRoutesFromElements, RouterProvider,Route } from 'react-router-dom'

//layouts
import HeaderLayout from './components/layouts/HeaderLayout'
import Actions from './components/layouts/Actions.jsx'

//pages
import Home from './Home.jsx'
import About from './components/pages/About.jsx'
import Projects, { projectsLoader } from './components/pages/Projects.jsx'
import News, { newsLoader } from './components/pages/News.jsx'
import FutureProjects, { futureProjectsLoader } from './components/pages/FutureProjects.jsx'
import Contact, { contactAction } from './components/pages/Contact.jsx'
import NotFound from './components/pages/NotFound.jsx'
import ProjectsDetails, { ProjectDetailsLoader } from './components/pages/ProjectsDetails.jsx'

import './index.css'
import ProjectsError from './components/pages/ProjectsError.jsx'
import FooterLayout from './components/layouts/FooterLayout.jsx'


export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<HeaderLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="actions" element={<Actions/>}>
          <Route path="projects" element={<Projects/>} loader = {projectsLoader} errorElement={<ProjectsError/>}/>
          <Route path="projects/:id" element={<ProjectsDetails/>} loader = {ProjectDetailsLoader} errorElement={<ProjectsError/>}/>
          <Route path="news" element={<News/>} loader = {newsLoader} />
          <Route path="futureProjects" element={<FutureProjects/>} loader = {futureProjectsLoader}/>
        </Route>
        <Route path="contact" element={<Contact/>} action={contactAction}/>

        <Route path="*" element={<NotFound/>}/>
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router}/>
      <FooterLayout/>
    </>
  )
}

