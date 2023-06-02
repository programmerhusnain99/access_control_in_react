import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Public from './components/Public';
import User from './components/User';
import Admin from './components/Admin';
import Navbar from './components/Navbar';
import LoginPage from './components/LoginPage';
import PublicElement from './components/PublicElement';
import UserElement from './components/UserElement';
import AdminElement from './components/AdminElement';
import Home from './components/Home';

function App() {

  const USER_TYPES = {
    PUBLIC: 'Public User',
    NORMAL_USER: 'Normal User',
    ADMIN_USER: 'Admin User'
  };
  const CURRENT_USER_TYPE = USER_TYPES.NORMAL_USER;

  return (
    <>
<Router>
  <Navbar CURRENT_USER_TYPE={CURRENT_USER_TYPE} />
      <Routes >
        <Route path='/' element={<Home/>}/>
        <Route path='/public' element={
          <PublicElement>
            <Public />
          </PublicElement>} />
        <Route path="/user" element={
          <UserElement CURRENT_USER_TYPE={CURRENT_USER_TYPE}>
            <User />
          </UserElement>} />
        <Route path='/admin' element={
          <AdminElement CURRENT_USER_TYPE={CURRENT_USER_TYPE}>
            <Admin />
          </AdminElement>} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
