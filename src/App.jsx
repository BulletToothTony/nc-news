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
import ChooseUser from './components/ChooseUser'
import NewArticlePage from './pages/NewArticlePage'
import { useContext, useEffect, useState } from 'react'
import { getAllUsers } from './utils/fetch'
import ChooseUserList from './components/ChooseUserList'
import { UserContext } from './contexts/User'

function App() {
  const [login, setLogin] = useState(false)
  const [users, setUsers] = useState([])

  const {setUser} = useContext(UserContext)

  useEffect(() =>{
    getAllUsers().then((response) => {
        setUsers(response.data)
    })
      },[])

      const setUserHandler = (user) => {
        console.log(user)
        setLogin(user)
        setUser(user)
      }
    

  return (
    <>
      {/* <ChooseUser /> */}
      {login && <p>Logged in as: {login}</p>}
    <Header title={"NC-NEWS"}/>
      <Navbar />
      {/* {!login && users.map((user) => <p>{user.username}</p>)} */}
      {!login && <ChooseUserList setUserHandler={setUserHandler} users={users}/>}
      {login &&
  <Routes>
  <Route path="/" element = {<ArticleList/>}/>
  <Route path="/articles/:id" element = {<SingleArticlePage/>}/>
  <Route path="/topics" element={<AllTopicsPage/>}/>
  <Route path="/topics/:topictype" element={<SingleTopicPage/>}/>
  <Route path="/users" element={<AllUsersPage/>}/>
  <Route path="/users/:username" element={<SingleUserPage/>}/>
  <Route path="/new-article" element={<NewArticlePage />}/>

  <Route path="*" element={<Error error={{msg: 'Page not found!', status: 404}}/>}/>
</Routes>
      }
  
    </>
  )
}

export default App
