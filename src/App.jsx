import { Routes, Route } from 'react-router-dom'

import './App.css'
import Header from './components/Header'

import Navbar from "./components/Navbar"
import ArticleList from './components/ArticleList'
import SingleArticlePage from './pages/SingleArticlePage'
import AllTopicsPage from './pages/AllTopicsPage'
import SingleTopicPage from './pages/SingleTopicPage'

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

    </Routes>
    </>
  )
}

export default App
