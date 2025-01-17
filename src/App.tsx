
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import './App.css'
import { Navigation } from './components/navigation'
import { Home } from './pages/Home'


const AppStructure = () => {
  return(
    <>
      <div>
        <Navigation />
        <Outlet />
      </div>
    </>
  )
}


function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppStructure /> }>
            <Route path='/' element={<Home/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
