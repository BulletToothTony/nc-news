import { Routes, Route } from 'react-router-dom'

import './App.css'
import Header from './components/Header'

import Navbar from "./components/Navbar"
import ArticleList from './components/ArticleList'

function App() {

  return (
    <>
    <Header title={"NC-NEWS"}/>
      <Navbar />
    <Routes>
      <Route path="/" element = {<ArticleList/>}/>
    </Routes>
    </>
  )
}

export default App
