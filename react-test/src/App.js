import { useState, useEffect } from 'react'
import Cards from './components/Cards'
import Header from './components/Header'
import Navigation from './components/Navigation'

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      const usersFromApi = await fetchUsersfromApi()
      setUsers(usersFromApi)
    }

    getUsers()
  }, [])

  //Fetch User from API
  const fetchUsersfromApi = async () => {
    const res = await fetch('https://randomuser.me/api/?results=20')
    const data  = await res.json()
    // console.log(data.results)
    return data.results
  }


  return (
    <div className="main-body">
        <Navigation />
        <div className='wrapContent'>
          <Header />
          <Cards users={users}/>
        </div>
    </div>
  );
}

export default App;
