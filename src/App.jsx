import { Routes , Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import Notifications from './pages/Notifications'
import People from './pages/People'
import Settings from './pages/Settings'
import AppLayout from './components/layout/AppLayout'
import GuestRoute from './routes/GuestRoute'
import ProtectedRoute from './routes/ProtectedRoute'
function App() {

  return (
    <>
      <Routes>
        <Route element={<GuestRoute />}>
          <Route path='/signIn' element={<SignIn />}/>
          <Route path='/signup' element={<SignUp />}/>
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route element={<AppLayout />}>

            <Route path='/' element={<Home/>}/>
            <Route path="/profile" element={<Profile />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/people" element={<People />} />

          </Route>
        </Route>
        
        <Route path="*" element={<NotFound />} />
      </Routes>
      
    </>
  )
}

export default App
