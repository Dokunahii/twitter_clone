import './App.css'
import AuthPage from './pages/AuthPage'
//import { Route, Routes } from 'react-router'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProfilePage from './pages/ProfilePage'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store} >
      <BrowserRouter>
        <Routes>
          <Route path='/profile' element={<ProfilePage />}/>
          <Route path='/login' element={<AuthPage />}/>
          <Route path='*' element={<AuthPage />}/>
        </Routes>
      </BrowserRouter>

    </Provider>
  )
}

export default App
