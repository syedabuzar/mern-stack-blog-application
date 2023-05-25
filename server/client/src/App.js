import { useState } from 'react';
import Login from './components/account/Login';
import Home from './components/home/Home';
import Header from './components/header/Header';
import DataProvider from './context/DataProvider';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from 'react-router-dom';
import CreatePost from './components/create/CreatePost';
import DetailView from './components/details/DetailView';
import Update from './components/create/Update';
import About from './components/about/About';
import Contact from './components/contact/Contact';

const PrivateRoute = ({ userAuthenticated, ...props }) => {
  // const token = sessionStorage.getItem('accessToken');
  return userAuthenticated ? (
    <>
      <Header />
      <Outlet />
    </>
  ) : (
    <Navigate replace to='/login' />
  );
};

function App() {
  const [userAuthenticated, isUserAuthenticated] = useState(false);
  return (
    <DataProvider>
      <BrowserRouter>
        <div style={{ marginTop: '64px' }}>
          <Routes>
            <Route
              path='/login'
              element={<Login isUserAuthenticated={isUserAuthenticated} />}
            />
            <Route
              path='/'
              element={<PrivateRoute userAuthenticated={userAuthenticated} />}
            >
              <Route path='/' element={<Home />} />
            </Route>

            <Route
              path='/create'
              element={<PrivateRoute userAuthenticated={userAuthenticated} />}
            >
              <Route path='/create' element={<CreatePost />} />
            </Route>

            <Route
              path='/details/:id'
              element={<PrivateRoute userAuthenticated={userAuthenticated} />}
            >
              <Route path='/details/:id' element={<DetailView />} />
            </Route>

            <Route
              path='/update/:id'
              element={<PrivateRoute userAuthenticated={userAuthenticated} />}
            >
              <Route path='/update/:id' element={<Update />} />
            </Route>

            <Route
              path='/about'
              element={<PrivateRoute userAuthenticated={userAuthenticated} />}
            >
              <Route path='/about' element={<About />} />
            </Route>

            <Route
              path='/contact'
              element={<PrivateRoute userAuthenticated={userAuthenticated} />}
            >
              <Route path='/contact' element={<Contact />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
