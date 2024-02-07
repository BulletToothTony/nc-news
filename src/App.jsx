import { Routes, Route } from 'react-router-dom'

import './App.css'
import Header from './components/Header'

import Navbar from "./components/Navbar"
import ArticleList from './components/ArticleList'
import SingleArticlePage from './pages/SingleArticlePage'
import AllTopicsPage from './pages/AllTopicsPage'
import SingleTopicPage from './pages/SingleTopicPage'
import Error from './components/Error'
import AllUsersPage from './pages/AllUsersPage'
import SingleUserPage from './pages/SingleUserPage'

function App() {

  return (
    <>
    <Header title={"NC-NEWS"}/>
      <Navbar />
    <Routes>
      <Route path="/" element = {<ArticleList/>}/>
      <Route path="/articles/:id" element = {<SingleArticlePage/>}/>
      <Route path="/topics" element={<AllTopicsPage/>}/>
      <Route path="/topics/:topictype" element={<SingleTopicPage/>}/>
      <Route path="/users" element={<AllUsersPage/>}/>
      <Route path="/users/:username" element={<SingleUserPage/>}/>

      <Route path="*" element={<Error error={{msg: 'Page not found!', status: 404}}/>}/>
    </Routes>
    </>
  )
}

export default App
